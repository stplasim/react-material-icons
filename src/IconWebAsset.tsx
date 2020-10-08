import React from 'react'
import { IconProps } from './types'

const IconWebAsset: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconWebAsset' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z" />
  </svg>
)

export { IconWebAsset as default }