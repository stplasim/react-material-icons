import React from 'react'
import { IconProps } from './types'

const IconLastPage: React.FC<IconProps> = ({
  title = 'IconLastPage',
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>{title}</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
  </svg>
)

export { IconLastPage as default }
