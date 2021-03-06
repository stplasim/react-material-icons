const fs = require('fs')
const path = require('path')
const axios = require('axios')

// Base url for icons
const iconURL = 'https://fonts.google.com/metadata/icons'

function setup() {
  let typesFile = "import React from 'react'\n\n"
  typesFile +=
    'export interface IconProps extends React.SVGProps<SVGSVGElement> {\n'
  typesFile += '\ttitle?: string\n'
  typesFile += '}\n'

  // Create types file
  fs.writeFileSync(path.join(__dirname, 'src', 'types.ts'), typesFile)
}

/**
 * Format name.
 * Covert from snake case to camel case and prevent numbers at the beginning
 *
 * @param string - String to format
 * @returns {string} - Formatted string
 */
function formatName(string) {
  const formattedString = string
    .replace(/_/g, ' ')
    .replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
    .replace(/ /g, '')
  return 'Icon' + formattedString
}

/**
 * Component template for functional react icon component
 *
 * @param name - Component name
 * @param svg - Icon SVG
 * @returns {string} - Component
 */
function componentTemplate(name, svg) {
  let component = "import React from 'react'\n"
  component += "import { IconProps } from './types'\n\n"
  component += `const ${name}: React.FC<IconProps> = ({ title = '${name}', ...props }) => (`
  component += svg + ')\n\n'
  component += `export { ${name} as default }`

  return component
}

/**
 * Generate React Icon components
 *
 * @param icon - Icon object
 */
function generateComponent(icon) {
  icon.forEach(async (c) => {
    const name = formatName(c.name)
    const svg = await getSVGFile(c.name, c.version)

    fs.writeFileSync(
      path.join(__dirname, 'src', `${name}.tsx`),
      componentTemplate(name, svg)
    )
  })
}

/**
 * Get SVG data form google static fonts api
 *
 * @param icon - Icon name
 * @param version - Icon Version
 * @returns {Promise<any>} - SVG Data
 */
async function getSVGFile(icon, version) {
  const svg = await axios.get(
    `https://fonts.gstatic.com/s/i/materialicons/${icon}/v${version}/24px.svg`
  )

  return svg.data
    .replace('height="24"', '')
    .replace('width="24"', '{...props}')
    .replace(/class/g, 'className')
    .replace(/enable-background/g, 'enableBackground')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/fill-rule/g, 'fillRule')
    .replace('>', '><title>{title}</title>')
}

/**
 * Main function
 */
;(async () => {
  // Setup source folder
  setup()

  // Get icon information from google fonts
  const res = await axios.get(iconURL)
  // remove )]}' from the response
  const data = res.data.substring(4)

  // Parse response from json to js object
  const icons = await JSON.parse(data)

  // Generate icon components and Index
  await generateComponent(icons.icons)
})()
