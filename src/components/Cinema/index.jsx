import React from 'react'
import Slider from 'infinite-react-carousel';
import "./Cinema.scss"

export default function Cinema() {
    const settings =  {
        centerMode: true,
        className: 'wrapper',
        centerPadding: 10,
        arrows: false,
        arrowsBlock: false,
        dots: true,
        slidesToShow: 3
    };

    const list = [{
        title:"Сумерки. Сага. Часть 1",
        poster: "https://english-films.online/uploads/posts/2019-09/1567422847_iphone360_401177.jpg"
    },{
        title:"Сумерки. Сага. Часть 2",
        poster: "https://english-films.online/uploads/posts/2019-09/1567422847_iphone360_401177.jpg"
    },{
        title:"Сумерки. Сага. Часть 3",
        poster: "https://english-films.online/uploads/posts/2019-09/1567422847_iphone360_401177.jpg"
    },{
        title:"Сумерки. Сага. Часть 4",
        poster: "https://english-films.online/uploads/posts/2019-09/1567422847_iphone360_401177.jpg"
    },{
        title:"Сумерки. Сага. Часть 5",
        poster: "https://english-films.online/uploads/posts/2019-09/1567422847_iphone360_401177.jpg"
    },]
    return (
        <div className="cinema">
            <div className="container">
                <div className="row">
                    <h1 className="heading">кинотеатр kinopark 4</h1>
                    
                    {/* <div className="cinema__wrapper">
                        <div className="cinema__block"></div>
                        <div className="cinema__block"></div>
                        <div className="cinema__block"></div>
                    </div> */}

                </div>
                <Slider {...settings}>
                        {list.map((item, i) => (
                            <div key={i}>
                                <div className="cinema__block">
                                    <div className="bg" style={{backgroundImage: `url(${item.poster})`}}></div>
                                    <div className="info-block">
                                        <p className="title">{item.title}</p>
                                        <button className="btn">Смотреть расписание</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    )
}
