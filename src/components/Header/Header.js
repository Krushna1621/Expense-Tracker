import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      {/* { <h4>My Weblinky</h4> } */}
      <ul className={classes.navList}>
        <li>
          HOME
        </li>
        <li>
          PRODUCTS
        </li>
        <li>
          ABOUT Us
        </li>
      </ul>
    </header>
  )
}

export default Header