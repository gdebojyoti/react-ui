import React from 'react'

type ButtonProps = {
  ctaText: string
}

function Button ({ ctaText }: ButtonProps) {
  return (
    <button>{ctaText}</button>
  )
}

export default Button