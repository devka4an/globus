import React from 'react'
import Tabs from '../components/Tabs/Tabs'
import Bread from '../components/Bread/Bread'

export default function Store() {
    return (
        <div>
            <div className="container">
                <Bread />
                <h1 className="Page_heading">Магазины</h1>
            </div>

            <Tabs />
        </div>
    )
}
