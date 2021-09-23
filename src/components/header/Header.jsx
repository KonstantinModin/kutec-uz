import React from 'react'
import {NavLink} from 'react-router-dom'

//styles
import './header.css'

function Nav() {

    return (
        <nav>
            <div className="container">
                <ul className="nav">
                    <li><NavLink exact activeClassName="nav-active" to="/">Главная</NavLink></li>
                    <li><NavLink exact activeClassName="nav-active" to="/services" >Каталог товаров</NavLink></li>
                    <li><NavLink exact activeClassName="nav-active" to="/info">Полезная информация</NavLink></li>
                    <li><NavLink exact activeClassName="nav-active" to="/delivery">Оплата и доставка</NavLink></li>
                    <li><NavLink exact activeClassName="nav-active" to="/contacts">Контакты</NavLink></li>
                    <li><NavLink exact activeClassName="nav-active" to="/admin">Admin</NavLink></li>
                </ul>
            </div>

        </nav>
    )
}
export default Nav