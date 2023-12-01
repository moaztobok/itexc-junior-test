import { type } from 'os'
import React from 'react'
interface buttonProps{
  title: string,
  variant: string,
  type: "button" | "submit" | "reset"
}
const Button = ({title,variant,type}:buttonProps) => {
  return (
    <button className={`w-40 px-2 py-4 ${variant}`}
    type={type}>
      {title}
    </button>
  )
}

export default Button