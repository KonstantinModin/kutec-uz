import React from 'react'

import './catalogMain.css'
import Card from "../card/Card";
import OurGreenHouses from "../ourGreenHouses/OurGreenHouses";
import {Link} from "react-router-dom";

const CatalogMain = (props) => {
    const {catalogItem = [], url} = props
    return (
        <>
            <section className="catalog-main">
                <div className="container">
                    <div className="catalog-main-wrapper">
                        <div className="catalog-main-header">
                            <div className="catalog-main-title">Каталог товаров</div>
                        </div>
                        <div className="catalog-main-items">
                            {catalogItem.map(item => <Card key={item.id} {...item} url={url}/>)}
                        </div>
                    </div>
                </div>
                <div className="catalog-all-items">
                    <Link to="/services">Вся продукция</Link>
                </div>
            </section>
            <OurGreenHouses />
            </>
    )

}

export default CatalogMain