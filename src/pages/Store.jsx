import React from 'react'
import Tabs from '../components/Tabs/Tabs'
import Bread from '../components/Bread/Bread'

export default function Store({tab}) {
    return (
        <div>
            <div className="container">
                <Bread />
                <h1 className="Page_heading">Магазины</h1>
            </div>
            <Tabs tab={tab} showTabs={false} />
            
        </div>
    )
}
