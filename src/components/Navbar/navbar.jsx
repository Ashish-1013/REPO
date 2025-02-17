import React from "react";
import style from'./navbar.module.css';    //module css
import logo from '../../assets/logo2.png';
import { Link } from 'react-scroll';  //npm i react-scroll
import contactImg from '/src/assets/contact.png';


const Navbar =()=>{
    return(
        <nav className={style.navbar}>
            <img src={logo} alt="logo" className={style.logo} />

            <div className="desktopMenu">
                <Link className={style.desktopMenuListItem}>Home</Link>
                <Link className={style.desktopMenuListItem}>Clients</Link>
                <Link className={style.desktopMenuListItem}>About</Link>
                <Link className={style.desktopMenuListItem}>Portfoleo</Link>
            </div>

            <button className={style.desktopMenuBtn}>
                <img src={contactImg} alt="" className={style.desktopMenuImg} />Contact Me
            </button>
        </nav>
    )
}

export default Navbar