import React from 'react'
import { IconProps } from './types'

const IconFlashOn: React.FC<IconProps> = ({
  title = 'IconFlashOn',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
  </svg>
)

export { IconFlashOn as default }
