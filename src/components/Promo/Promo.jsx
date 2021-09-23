import React from 'react'

import './promo.css'
import flagUz from '../../images/flag_uz.png'
import flagKorea from '../../images/flag_korea.png'

function Promo() {
    return (
        <div className="promo__wrapper">
            <div className="promo__title">
                <h1>ПРОИЗВОДСТВО И ПРОДАЖА ТЕПЛИЦ<span> <p>С ДОСТАВКОЙ ПО ВСЕМУ УЗБЕКИСТАНУ</p></span> </h1>
            </div>
            <div className="promo__company">
                <h2>Korea Uzbekistan Technology Collaboration </h2>
            </div>

            <div className="promo__flags">
                <img src={flagUz} alt="" className="flags-name"/>
                <img src={flagKorea} alt="" className="flags-name"/>
            </div>
            <div className="promo__build">
                <h3>
                    Производство фермеРских
                    теплиц ОТ КОРЕЙСКОГО ПРОИЗВОДИТЕЛЯ,
                    шефмонтаж и строительство
                    по всему Узбекистану
                </h3>
            </div>
        </div>
    )
}

export default Promo