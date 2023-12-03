import { type } from 'os'
import React from 'react'
type EmptyCallback = () => void;

interface buttonProps{
  title: string,
  variant: string,
  type: "button" | "submit" | "reset"
  onClick: void|EmptyCallback,
}
const Button = ({title,variant,type,onClick}:buttonProps) => {
  return (
    <button className={`w-40 px-2 py-4 ${variant}`} 
    type={type}>
      {title}
    </button>
  )
}

export default Button