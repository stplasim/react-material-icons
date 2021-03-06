import React from 'react'
import { IconProps } from './types'

const IconCallMissed: React.FC<IconProps> = ({
  title = 'IconCallMissed',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z" />
  </svg>
)

export { IconCallMissed as default }
