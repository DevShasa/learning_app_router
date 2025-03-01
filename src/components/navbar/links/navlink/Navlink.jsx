"use client";

import Link from "next/link"
import styles from "./navlink.module.css"
import { usePathname } from "next/navigation"

export default function Navlink({item}) {

    const pathname = usePathname()

  return (
    <Link
        href={item.path}
        className={`${styles.container} ${pathname === item.path && styles.active}`}
    >
        {item.title}
    </Link>
  )
}
