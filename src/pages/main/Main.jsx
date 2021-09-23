import React from 'react'

import './main.css'
import Slider from "../../slider/Slider";
import Advantages from '../../components/advantages/Advantages'
import Promo from "../../components/Promo/Promo";
import CatalogMain from "../../components/catalogMain/CatalogMain";

import icon1 from '../../icons/icon_advantages-01.svg'
import icon2 from '../../icons/icon_advantages-02.svg'
import icon3 from '../../icons/icon_advantages-03.svg'
import icon4 from '../../icons/icon_advantages-04.svg'

function Main(props) {
    const {catalogItem = [], url} = props
    return (
        <>
            <div className="container wrapper-promo">
                <Slider/>
                <div className="promo">
                    <Promo />
                </div>
            </div>
            <div className="wrapper_adv">
                <div className="container wrapper_content">
                    <Advantages
                        title="Окупаемость"
                        subtitle="от 1 года"
                        img={icon1}/>
                    <Advantages
                        title="Урожайность"
                        subtitle="+ 30%"
                        img={icon2}/>
                    <Advantages
                        title="Издержки"
                        subtitle="- 45%"
                        img={icon3}/>
                    <Advantages
                        title="Срок службы"
                        subtitle="20 лет +"
                        img={icon4}/>
                </div>
            </div>

            <CatalogMain catalogItem={catalogItem} url={url}/>
        </>
    )
}

export default Main