import React from 'react'

function Card(props) {
    const {id, inputValue, descriptionValue, date, url} = props
    return (
        <div className="card">
            <div className="title-card"><h3>{inputValue}</h3></div>
            <div className="description-card"><h4>
                {descriptionValue.slice(0, 33)}...
            </h4></div>
            <div className="a-button">
                <a href="#">Подробнее</a>
            </div>
        </div>
    )
}

export default Card