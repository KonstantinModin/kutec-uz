import React from 'react'

import './pageTitle.css'
import {Link} from "react-router-dom";

const PageTitle = () => {

    const pageTitleChanger = () => {
        if(window.location.pathname === '/services'){
            return `Каталог товаров`
        }
        if (window.location.pathname === '/info'){
            return ` Полезная информация`
        }
        if (window.location.pathname === '/delivery'){
            return `Оплата и доставка`
        }
        if (window.location.pathname === '/contacts'){
            return `Контакты`
        }
    }

    return (
        <><section className='page-title'>
            <div className="container">
                <div className="page-heading">
                    {pageTitleChanger()}
                </div>
                <div className="bread-cramps"><Link to="/">Главная </Link>/ {pageTitleChanger()}</div>
                <hr className="page-devider"/>
            </div>
        </section>
            </>
    )
}

export default PageTitle