import React from 'react'
import PageTitle from "../../components/pageTitle/PageTitle";
import Card from "../../components/card/Card";


import './info.css'


function Info(props) {
    const {catalogItem = [], url} = props
    console.log(url)
    return (
        <>
            <section className="info">
                <div className="container">
                    <PageTitle />
                    <div className="info-wrapper">
                        <div className="cards-wrapper">
                            { catalogItem.map(item => <Card key={item.id} {...item} url={url}/>)}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Info