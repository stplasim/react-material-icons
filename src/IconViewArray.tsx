import React from 'react'
import { IconProps } from './types'

const IconViewArray: React.FC<IconProps> = ({
  title = 'IconViewArray',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z" />
  </svg>
)

export { IconViewArray as default }
