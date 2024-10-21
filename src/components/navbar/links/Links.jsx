"use client"


import { useState } from "react";
import styles from "./links.module.css"
import Navlink from "./navlink/Navlink";
import Image from "next/image";

const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

export default function Links() {

    const [open, setOpen] = useState(false)
    const session = true
    const isAdmin = true

  return (
    <div className={styles.container}>
        <div className={styles.links}>
            {links.map((link)=>{
                return (<Navlink item={link} key={link.title} />)
            })}
            {
                session 
                ? (
                    <>
                        {isAdmin && <Navlink item={{title:"Admin", path:"/admin"}}/>}
                        <button className={styles.logout}>Logout</button>
                    </>
                )
                : (
                    <Navlink item={{title:"Login", path:"/login"}}/>
                    )
                }
        </div>
        <Image 
            className={styles.menuButton}
            src="/menu.png"
            alt=""
            width={30}
            height={30}
            onClick={()=> setOpen((prev) => !prev)}
        />
        {open && (
            <div className={styles.mobileLinks}>
                {links.map(link => <Navlink item={link} key={link.title} />)}
            </div>
        )}
    </div>
  )
}
