import React from 'react'

import './ourGreenHouses.css'
import image3d from '../../images/image3d.png'

const OurGreenHouses = () => {
    return (
        <>

            <section className="our-green-houses">
                <div className="container">
                    <div className="our-green-houses-header">
                        <div className="our-green-houses-title"> Преимущество наших теплиц </div>
                    </div>

                    <div className="green-houses-wrapper">

                        <div className="green-house">
                            <div className="our-green-houses-column">

                                <div className="our-green-house-description">
                                    <div className="our-green-house-heading">Предельные снеговый нагрузки</div>
                                    <div className="our-green-house-subtitle">
                                        Предельные снеговые нагрузки получены на основе прочностных испытаний. Расстояние между дугами 0,5 м обеспечивает прочность и надежность теплицы
                                    </div>
                                </div>

                            </div>

                            <div className="our-green-houses-column mt-50">
                                <div className="our-green-house-description">
                                    <div className="our-green-house-heading">Легкость монтажа конструкции</div>
                                    <div className="our-green-house-subtitle">
                                        Каркас собирается с помощью винтов и гаек и не требует дополнительного оборудования для сборки.
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="green-house">
                            <div className="our-green-house-3d">
                                <img src={image3d} alt=""/>
                            </div>
                        </div>

                        <div className="green-house">

                            <div className="our-green-houses-column">
                                <div className="our-green-house-description">
                                    <div className="our-green-house-heading">Легкость монтажа конструкции</div>
                                    <div className="our-green-house-subtitle">
                                        Каркас теплицы выполнен из оцинкованной стали, что является надёжной защитой от коррозии более чем любые виды окраски.
                                    </div>
                                </div>
                            </div>

                            <div className="our-green-houses-column mt-50">
                                <div className="our-green-house-description">
                                    <div className="our-green-house-heading">Высокое качество - низкая цена</div>
                                    <div className="our-green-house-subtitle">
                                        Высокое качество при низкой цене достигается за счёт оптимальной конструкции и современных технологий.
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            </>
    )
}

export default OurGreenHouses