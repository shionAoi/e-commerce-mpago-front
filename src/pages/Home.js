/** Librerias*/
import React, {useEffect} from 'react'
import galaxy from '../assets/samsung-galaxy-s9-xxl.jpg'
import Lg from '../assets/l6g6.jpg'
import Iphone from '../assets/iphone.png'
import Motorola from '../assets/motorola-moto-g5-plus-1.jpg'
import Moto from '../assets/motorola-moto-g4-3.jpg'
import Sony from '../assets/003.jpg'
import {Footer} from "../shared/Footer";
import {useHistory, useParams} from "react-router-dom";


export const Home = () => {

    const items = [
        {
            id: '1234',
            img: galaxy,
            productName: 'Samsung Galaxy S9',
            unitPrice: 2741.98
        },
        {
            id: '1234',
            img: Lg,
            productName: 'LG G6',
            unitPrice: 1827.99
        },
        {
            id: '1234',
            img: Iphone,
            productName: 'iPhone 8',
            unitPrice: 2924.78
        },
        {
            id: '1234',
            img: Motorola,
            productName: 'Motorola G5',
            unitPrice: 1645.19
        },
        {
            id: '1234',
            img: Moto,
            productName: 'Moto G4',
            unitPrice: 1462.39
        },
        {
            id: '1234',
            img: Sony,
            productName: 'Sony Xperia XZ2',
            unitPrice: 1827.99
        }
    ]
    const history = useHistory()
    const params = useParams()
    const handleClick = (index) => {
        history.push('/details', {id: 1})
        const item = items[index]
        const search = `?img=${item.img}&title=${item.productName}&price=${item.unitPrice}&unit=${1}`
        history.push({pathname: '/details', search: search, state: {data: items[index]}})
    }

    useEffect(() => {
        const script = document.getElementById('mercado')
        script.setAttribute("view", "home")
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 className="text-muted">Smartphones</h3>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            items.map((item, idx) => (
                                <div className="col" key={idx}>
                                    <div className="card h-100">

                                        <img src={item.img}
                                             className="card-img-top"

                                             style={{maxWidth: '90%', maxHeight: '90%'}}
                                             alt="image"/>

                                        <div className="card-body text-center mw-100 d-block">
                                            <h5 className="card-title text-center">{item.productName}</h5>
                                            <p className="card-text">${item.unitPrice}</p>
                                            <button type="button"
                                                    onClick={() => {
                                                        handleClick(idx)
                                                    }}
                                                    className="btn btn-primary">Comprar
                                            </button>
                                        </div>

                                        <div className="card-footer">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}
