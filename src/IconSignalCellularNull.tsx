import React from 'react'
import { IconProps } from './types'

const IconSignalCellularNull: React.FC<IconProps> = ({
  title = 'IconSignalCellularNull',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" />
  </svg>
)

export { IconSignalCellularNull as default }
