import React from 'react'
import ItemMenuNavBar from './ItemMenuNavBar'

export default function MenuNavBar({ data }) {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {data.map((item) => (
        <li key={item.id} className="nav-item ">
          <ItemMenuNavBar
            name={item.name}
            id={item.id}
            color='warning'
            disabled={item.active}
          />
        </li>
      ))}
    </ul>
  )
}
