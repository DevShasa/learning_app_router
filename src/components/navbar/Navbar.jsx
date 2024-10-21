import React from 'react'
import Links from './links/Links'
import styles from "./navbar.module.css"
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>Shasa</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}
