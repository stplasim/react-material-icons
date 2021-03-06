import React from 'react'
import { IconProps } from './types'

const IconTableRows: React.FC<IconProps> = ({
  title = 'IconTableRows',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{title}</title>
    <g>
      <rect fill="none" height="24" width="24" />
      <path d="M22,7H2V2h20V7z M22,9.5H2v5h20V9.5z M22,17H2v5h20V17z" />
    </g>
  </svg>
)

export { IconTableRows as default }
