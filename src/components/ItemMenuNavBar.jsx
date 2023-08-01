import React from 'react'

export default function ItemMenuNavBar({ name, color, disabled }) {
  const isDisabled = !disabled ? 'disabled' : ''
  return (
    <a className= {`nav-link active text-${color} ${isDisabled}`} aria-current="page" href="#">
      {name}
    </a>
  )
}
