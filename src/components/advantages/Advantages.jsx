import React from 'react'


import './advantages.css'

function Advantages(props) {
    const {img, title, subtitle} = props
    return (
        <div className="wrapper">
            <div className="container">
                <div className="advantages__wrapper">
                    <div className="advantages__icon">
                        <img src={img} alt=""/>
                    </div>
                    <div className="advantages__title">{title}</div>
                    <div className="advantages__subtitle">{subtitle}</div>
                </div>
            </div>
        </div>
    )
}

export default Advantages