import React from 'react'
import { IconProps } from './types'

const IconCrop169: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{props.title === undefined ? 'IconCrop169' : props.title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" />
  </svg>
)

export { IconCrop169 as default }