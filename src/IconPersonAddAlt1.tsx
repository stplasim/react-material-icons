import React from 'react'
import { IconProps } from './types'

const IconPersonAddAlt1: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    {...props}
  >
    <title>
      {props.title === undefined ? 'IconPersonAddAlt1' : props.title}
    </title>
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M13,8c0-2.21-1.79-4-4-4S5,5.79,5,8s1.79,4,4,4S13,10.21,13,8z M15,10v2h3v3h2v-3h3v-2h-3V7h-2v3H15z M1,18v2h16v-2 c0-2.66-5.33-4-8-4S1,15.34,1,18z" />
    </g>
  </svg>
)

export { IconPersonAddAlt1 as default }