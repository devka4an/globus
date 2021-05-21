import React, {useEffect, useState} from 'react'
import "./Tabs.scss"

export default function Tabs() {
    const [slcTab, setTab] = useState()
    const tabs = [{
        id: "001",
        title: "МАГАЗИНЫ",
        slug: 'stores',
        count: 44
    },{
        id: "002",
        title: "ЕДА",
        slug: 'food',
        count: 10
    },{
        id: "003",
        title: "УСЛУГИ",
        slug: 'services',
        count: 21
    },{
        id: "004",
        title: "РАЗВЛЕЧЕНИЯ",
        slug: 'fun',
        count: 2
    },]

    const contentd = [{
        title: 'Miniso',
        level: 1
    },{
        title: 'Serebroff',
        level: 1
    },{
        title: 'LC Waikiki',
        level: 1
    },{
        title: 'Huawei',
        level: 1
    },{
        title: 'MilaVitsa',
        level: 1
    },{
        title: 'L’occitane',
        level: 1
    },]
    const content = {
        stores: [
            {
                title: 'Miniso',
                level: 1
            },{
                title: 'Serebroff',
                level: 1
            },{
                title: 'LC Waikiki',
                level: 1
            },{
                title: 'Huawei',
                level: 1
            },{
                title: 'MilaVitsa',
                level: 1
            },{
                title: 'L’occitane',
                level: 1
            }
        ],
        food: [
            {
                title: 'Huawei',
                level: 1
            },{
                title: 'Serebroff',
                level: 1
            },{
                title: 'LC Waikiki',
                level: 1
            },{
                title: 'L’occitane',
                level: 1
            }
        ],
        services: [
            {
                title: 'Miniso',
                level: 1
            },{
                title: 'Serebroff',
                level: 1
            },{
                title: 'LC Waikiki',
                level: 1
            }
        ],
        fun: [
            {
                title: 'Serebroff',
                level: 1
            },{
                title: 'LC Waikiki',
                level: 1
            },{
                level: 1
            },{
                title: 'Huawei',
                title: 'Miniso',
                level: 1
            },{
                title: 'L’occitane',
                level: 1
            }
        ],
    }

    const getContent = (slug) => {
        return content[slug]
    }

    useEffect(() => {
        // setTab(tabs[0])
    }, [])

    const handleTabs = (item) => {
        console.log('handleTabs:', item);
        setTab(item)
    }


    return (
        <div className="container">
            <div className="row">
                <div className="tabs">
                    <div className="tabs__header">
                        {tabs.map((item, i) => (
                            <div className={`tab ${ slcTab? (item.id == slcTab.id ? 'active':''):'' }`} key={i} onClick={() => handleTabs(item)}>
                                <span className="tab__title">{item.title}</span>
                                <span className="count">{item.count}</span>
                            </div>
                        ))}
                    </div>
                    <div className="tabs__content">
                        {slcTab && getContent(slcTab.slug).map((item, i) => (
                            <div className="blocks-wrapper">
                                <div className="block" key={i}>
                                    <div className="block__info">
                                        <span className="level">{item.level} этаж</span>
                                        <p className="title">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
