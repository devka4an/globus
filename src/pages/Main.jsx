import React from 'react'
import Banner from './../components/Banner/Banner'
import PromoEvents from './../components/PromoEvents'

import "./../styles/pages/main-page.scss"

export default function Main() {
    return (
        <div>
            <Banner />
            <div className="info">
                <div className="info_block">
                    <h2 className="info_title">адрес</h2>
                    <div className="icon"></div>
                    <p className="info_text">г. Алматы, пр. Абая, 52В <br /> уг. ул. Ауэзова</p>
                </div>
                <div className="info_block">
                    <h2 className="info_title">адрес</h2>
                    <div className="icon"></div>
                    <p className="info_text">г. Алматы, пр. Абая, 52В <br /> уг. ул. Ауэзова</p>
                </div>
                <div className="info_block">
                    <h2 className="info_title">адрес</h2>
                    <div className="icon"></div>
                    <p className="info_text">г. Алматы, пр. Абая, 52В <br /> уг. ул. Ауэзова</p>
                </div>
            </div>
            <PromoEvents />
        </div>
    )
}
