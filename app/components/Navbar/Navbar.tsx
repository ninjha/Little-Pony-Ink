"use client";

import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import HomeIcon from "../Svg/HomeIcon";
import GalleryIcon from "../Svg/GalleryIcon";
import FlashIcon  from "../Svg/FlashIcon";
import ProjectIcon from "../Svg/ProjectIcon";
import FaqIcon from "../Svg/FaqIcon";
import InstagramIcon from "../Svg/InstagramIcon";
import CloseIcon from "../Svg/Close";
import BurgerIcon from "../Svg/BurgerIcon";




export default function Navbar() {
    const [open, setOpen] = useState(false);

    /*
    const tab = useState(false);
    const open = tab[0];
    const setOpen = tab[1];
    */

    return (
        
        <nav className={styles.nav}>
            <Image
                src="/icon/little-Pony-Ink-Logo.png"
                alt="Logo"
                width={120}
                height={60}
            />
            <ul className={`${styles.list} ${open ? styles.open : ""}`}> {/* Si open == true, on ajoute la classe "open", sinon on n'ajoute rien */}
                <li>
                    <Link className={styles.nav_link} href="/">
                        <HomeIcon className={styles.icon} height={24} width={24} color="currentColor"/>
                        Accueil
                    </Link>
                </li>

                <li>
                    <Link className={styles.nav_link} href="/galerie">
                        <GalleryIcon className={styles.icon} height={24} width={24} color="currentColor"/>
                        Galerie
                    </Link>
                </li>

                <li>
                    <Link className={styles.nav_link} href="/flash">
                        <FlashIcon className={styles.icon} height={24} width={24} color="currentColor"/>
                        Flash
                    </Link>
                </li>

                <li>
                    <Link className={styles.nav_link} href="/projet-perso">
                        <ProjectIcon className={styles.icon} height={24} width={24} color="currentColor"/>
                        Projet perso
                    </Link>
                </li>

                <li>
                    <Link className={styles.nav_link} href="/faq" >
                        <FaqIcon className={styles.icon} height={24} width={24} color="currentColor"/>
                        FAQ
                    </Link>
                </li>
                <li>
                    <Link
                        className={styles.nav_link}
                        href="https://www.instagram.com/littleponyink/"
                        target="_blank"
                        rel="noopener noreferrer"
                        
                    >
                        <InstagramIcon className={styles.insta_icon} height={24} width={24} color="currentColor"/>
                        <span className={styles.insta_icon_text}>Instagram</span>
                    </Link>
                </li>
            </ul>
            <button
                className={styles.burger}
                onClick={() => setOpen(!open)}
                >
                    {open ? (<CloseIcon height={48} width={48} color="currentColor" />) : (<BurgerIcon height={48} width={48} color="currentColor" />)}
            </button>
        </nav>
        );
}