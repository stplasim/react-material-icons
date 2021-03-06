import React from 'react'
import { IconProps } from './types'

const IconNotes: React.FC<IconProps> = ({ title = 'IconNotes', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
  </svg>
)

export { IconNotes as default }
