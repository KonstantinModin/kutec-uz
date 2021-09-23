import React from 'react'

import './footer.css'
import logo from '../../images/logoQtec.svg'
import locationIcon from '../../images/location.svg'
import phoneIcon from '../../images/pnone.svg'
import browserIcon from '../../images/browser-icon.svg'

function Footer() {
    return (
        <section className="footer">
            <div className="container">

                <div className="footer--title">
                    <img src={logo} alt="Q-Kutec"/>
                    <div className="footer-name">Kut<span>e</span>c</div>
                </div>
                <div className="footer-subtitle">
                    Korea Uzbekistan Technology Collaboration
                </div>
                <div className="footer-build">
                    От корейского производителя “под ключ”
                </div>

                <div className="footer-wrapper">

                    <div className="footer-column-decr">
                        <ul className="footer-list">
                            <li>Производство</li>
                            <li>Монтаж</li>
                            <li>Доставка по всему Узбекистану</li>
                        </ul>
                    </div>

                    <div className="footer-column-decr">
                        <ul className="footer-list">
                            <li>Строительство тепличных комплексов
                                <br/>
                                и комбинатов “под ключ”
                            </li>
                            <li>Поставка расходных материалов </li>
                            <li>Проектирование и производтсво
                                <br/>
                                тепличных конструкций</li>
                            <li>Реконструкция и монтаж теплиц</li>
                            <li>Поставка инженерного и технического
                                <br/>
                                оборудования</li>
                            <li>Агрономическое сопровождение</li>
                        </ul>
                    </div>

                    <div className="footer-column-decr">

                        <ul className="footer-list">
                            <li><img src={locationIcon} alt=""/> Офис в Кореи:
                                <br/>
                                5 этаж, MK Building 31-10,
                                <br/>
                                поселок Янгпёнгдонг первый,
                                <br/>
                                район Ёндынпогу, Сеул, Южная Корея.</li>
                            <li><img src={locationIcon} alt=""/>Офис в Узбекистане:
                                <br/>
                                Ташкентская область, Ташкент,
                                <br/>
                                Ул. Мукимий 148/26.</li>
                            <li><img src={browserIcon} alt=""/>www.kutec.uz</li>
                            <li><img src={phoneIcon} alt=""/>+998 99 999 99 99</li>
                        </ul>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Footer