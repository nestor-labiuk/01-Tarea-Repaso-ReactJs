import React from 'react'
import MenuNavBar from './MenuNavBar'
import Search from './Search'
import dataMenu from '../data/Menu.json'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" >
        <div className="container-fluid">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <MenuNavBar data={ dataMenu }/>
            <Search />
          </div>
        </div>
      </nav>
  )
}
