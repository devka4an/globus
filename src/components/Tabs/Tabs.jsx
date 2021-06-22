import React, {useEffect, useState} from 'react'
import "./Tabs.scss"

import miniso from './../../assets/miniso.png'
import serebr from './../../assets/serebr.png'
import lcw from './../../assets/lcw.png'
import huawei from './../../assets/huawei.png'
import valav from './../../assets/valav.png'
import locc from './../../assets/locc.png'
import load from './../../assets/load.svg'
import map from './../../assets/map.svg'

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
        poster: miniso,
        level: 1
    },{
        title: 'Serebroff',
        poster: serebr,
        level: 1
    },{
        title: 'LC Waikiki',
        poster: lcw,
        level: 1
    },{
        title: 'Huawei',
        poster: huawei,
        level: 1
    },{
        title: 'MilaVitsa',
        poster: valav,
        level: 1
    },{
        title: 'L’occitane',
        poster: locc,
        level: 1
    },]
    const content = {
        stores: [
            {
                title: 'Miniso',
                poster: miniso,
                level: 1
            },{
                title: 'Serebroff',
                poster: serebr,
                level: 1
            },{
                title: 'LC Waikiki',
                poster: lcw,
                level: 1
            },{
                title: 'Huawei',
                poster: huawei,
                level: 1
            },{
                title: 'MilaVitsa',
                poster: valav,
                level: 1
            },{
                title: 'L’occitane',
                poster: locc,
                level: 1
            }
        ],
        food: [
            {
                title: 'Huawei',
                poster: huawei,
                level: 1
            },{
                title: 'Serebroff',
                poster: serebr,
                level: 1
            },{
                title: 'LC Waikiki',
                poster: lcw,
                level: 1
            },{
                title: 'L’occitane',
                poster: locc,
                level: 1
            }
        ],
        services: [
            {
                title: 'Miniso',
                poster: miniso,
                level: 1
            },{
                title: 'Serebroff',
                poster: serebr,
                level: 1
            },{
                title: 'LC Waikiki',
                poster: lcw,
                level: 1
            }
        ],
        fun: [
            {
                title: 'Serebroff',
                poster: serebr,
                level: 1
            },{
                title: 'LC Waikiki',
                poster: lcw,
                level: 1
            },{
                title: 'Huawei',
                poster: huawei,
                level: 1
            },{
                title: 'Miniso',
                poster: miniso,
                level: 1
            },{
                title: 'L’occitane',
                poster: locc,
                level: 1
            }
        ],
    }

    const getContent = (slug) => {
        return content[slug]
    }

    useEffect(() => {
        setTab(tabs[0])
    }, [])

    const handleTabs = (item) => {
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
                            // <div className="blocks-wrapper" key={i} style={{backgroundImage: `url(/static/media/${item.poster})`}}>
                            <div className="blocks-wrapper" key={i}>
                                <div className="block" img={item.poster} style={{backgroundImage: `url(${item.poster})`}}>
                                    <div className="block__info">
                                        <span className="level">{item.level} этаж</span>
                                        <p className="title">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="tabs__footer">
                        <div className="btn" onClick={() => alert('Load more!')}>
                            <div className="icon" style={{backgroundImage: `url(${load})`}}></div>
                            <p>Загрузить еще</p>
                        </div>
                        <div className="btn green" onClick={() => alert('Show MAP!')}>
                            <div className="icon" style={{backgroundImage: `url(${map})`}}></div>
                            <p>карта трц</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
