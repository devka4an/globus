import React from 'react'
import {
    Link
  } from "react-router-dom";
import Icon from "./../assets/icon.svg"
import Aim from "./../assets/aim.svg"

export default function Header() {
    const menu = [
        {
            title: "ГЛАВНАЯ",
            url: '/',
            isActive: true
        },{
            title: "О НАС",
            url: '/',
            isActive: false
        },{
            title: "КАРТА ТРЦ",
            url: '/',
            isActive: false
        },{
            title: "МАГАЗИНЫ",
            url: '/',
            isActive: false
        },{
            title: "АКЦИИ",
            url: '/',
            isActive: false
        },{
            title: "ФУД-КОРТЫ",
            url: '/',
            isActive: false
        },{
            title: "АРЕНДАТОРАМ",
            url: '/',
            isActive: false
        },{
            title: "КОНТАКТЫ",
            url: '/',
            isActive: false
        },{
            title: "ФОТОГАЛЕРЕЯ",
            url: '/',
            isActive: false
        }
    ]
    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center justify-content-between top-header">
                    <div className="tel">
                        <img src={Icon} alt="" />
                        <p>+7 727 356 15 15</p>
                    </div>
                    <div className="social">
                        <a href="#" className="social__icon fb"></a>
                        <a href="#" className="social__icon ins"></a>
                        <a href="#" className="social__icon vk"></a>
                    </div>
                    <div className="block location">
                        <div className="icon aim"></div>
                        <p>Абая, 108в</p>
                    </div>
                    <div className="block time-interval">
                        <div className="icon clock"></div>
                        <p>10:00 - 22:00</p>
                    </div>
                    <div className="lang">
                        <a href="#" className="lang__item">KZ</a>
                        <a href="#" className="lang__item active">RU</a>
                        <a href="#" className="lang__item">EN</a>
                    </div>
                    <div className="logo"></div>
                </div>
            </div>
            <nav className="nav-menu">
                <div className="container">
                    <div className="row">
                        <ul className="menu">
                            {menu.map((item, i) => (
                                <li className={`menu__item ${item.isActive? 'active':''}`} key={i}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
        // <div>
        //     <Link to='/' >Main</Link>
        //     <Link to='/about' >About</Link>
        // </div>
    )
}
