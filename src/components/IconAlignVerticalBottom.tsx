import React from 'react'
import { IconProps } from './types'
const IconAlignVerticalBottom: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z" />
  </svg>
)

export { IconAlignVerticalBottom }