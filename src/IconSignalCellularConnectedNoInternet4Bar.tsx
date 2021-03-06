import React from 'react'
import { IconProps } from './types'

const IconSignalCellularConnectedNoInternet4Bar: React.FC<IconProps> = ({
  title = 'IconSignalCellularConnectedNoInternet4Bar',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z" />
  </svg>
)

export { IconSignalCellularConnectedNoInternet4Bar as default }
