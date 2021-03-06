import React from 'react'
import { IconProps } from './types'

const IconBrightness1: React.FC<IconProps> = ({
  title = 'IconBrightness1',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="10" />
  </svg>
)

export { IconBrightness1 as default }
