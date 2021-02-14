import React, {useEffect, useRef, useState} from 'react'
import {Redirect, useLocation} from "react-router-dom";
import {useQuery} from "../hooks/use-query";

export const Details = () => {

    const [quantity, setQuantity] = useState(1)
    const location = useLocation()
    const query = useQuery(location.search)
    const refContainer = useRef(null)
    const refButton = useRef(null)

    const data = {
        img: query.get('img'),
        title: query.get('title'),
        price: parseFloat(query.get('price')),
        unit: parseInt(query.get('unit')),
    }

    const handleClick = (count) => {
        if (quantity + count > 0) {
            setQuantity(quantity + count)
        }
    }

    const handleCheckOut = () => {
        refButton.current.disabled = true

        const preference = {
            payer: {
                name: "Lalo",
                surname: "Landa",
                email: "test_user_46542185@testuser.com",
                phone: {
                    area_code: "52",
                    number: 5549737300
                },
                identification: {
                    type: "DNI",
                    number: "22334445"
                },
                address: {
                    zip_code: "03940",
                    street_name: "Insurgentes Sur",
                    street_number: 1602
                }
            },
            items: [
                {
                    id: "1234",
                    picture_url: `${process.env.REACT_APP_URL_FRONT}${data.img}`,
                    // title: "Samsung Galaxy S9",
                    title: data.title,
                    description: "Dispositivo móvil de Tienda e-commerce",
                    quantity: quantity,
                    unit_price: data.price
                }
            ],
            external_reference: `${process.env.REACT_APP_EXTERNAL_REFERENCE}`,
            payment_methods: {
                excluded_payment_methods: [
                    {
                        id: "diners"
                    }
                ],
                excluded_payment_types: [
                    {
                        id: "atm"
                    }
                ],
                installments: 6,
            },
            back_urls: {
                success: `${process.env.REACT_APP_URL_FRONT}/success`,
                pending: `${process.env.REACT_APP_URL_FRONT}/pending`,
                failure: `${process.env.REACT_APP_URL_FRONT}/failure`
            },
            auto_return: "approved",
            notification_url: `${process.env.REACT_APP_URL_BACK}/mercado/notifications?source_news=webhooks`
        }

        fetch(`${process.env.REACT_APP_URL_BACK}/mercado/create_preference`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(preference)
        }).then((result) => {
            return result.json()

        }).then((preference) => {
            window.location = preference.init_point
        }).catch((e) => {
            console.log(e)
        })

    }

    useEffect(() => {
        const script = document.getElementById('mercado')
        script.setAttribute("view", "item")
    }, [])

    return (

        <div className="row">
            <h3 className="ms-5">Smartphones</h3>
            <div className="container mt-3">
                <div className="mb-3 w-75">
                    <div className="row g-0">

                        <div className="col-md-3 p-0 text-center border">
                            <img src={data.img} alt="..."
                                 className=""
                                 style={{'width': 200, 'height': 250}}/>
                        </div>

                        <div className="col-md-3 border">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Producto</h5>
                                <p className="card-text">
                                    <strong>PRECIO: </strong>
                                    <span className="text-success fw-bold">S/. {data.price}</span>
                                    <br/>
                                    <strong>MODELO: </strong> {data.title}
                                    <br/>
                                    <strong>RAM: </strong> 8GB
                                    <br/>
                                    <strong>CAMARA: </strong> 12MPX
                                    <br/>
                                    <strong>ALMACENAMIENTO: </strong> 64GB
                                    <br/>
                                    <strong>PANTALLA: </strong> AMOLED
                                    <br/>
                                    <strong>BATERIA: </strong> 4000mAh
                                    <br/>
                                    <strong>PROCESADOR: </strong> Snack dragon 654
                                    <br/>
                                </p>
                                {/*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>*/}
                                {/*</p>*/}

                            </div>
                        </div>

                        <div className="col-md-3 border">
                            <div className="card-body">
                                <h5 className="card-title text-primary text-center">Cantidad</h5>
                                <div className="text-center">
                                    <input type="number"
                                           value={quantity}
                                           onChange={() => {
                                           }}
                                           className="form-control"/>
                                    <div className="form-group mt-3">
                                        <button type="button"
                                                onClick={() => handleClick(-1)}
                                                className="btn btn-primary mx-2">-
                                        </button>
                                        <button type="button"
                                                onClick={() => handleClick(+1)}
                                                className="btn btn-primary">+
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 border text-center">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Cart</h5>
                                <br/>
                                <p className="fs-4">S/ {data.price * quantity}</p>
                                <p><strong>Subtotal</strong></p>
                                <br/>
                                <button type="button"
                                        ref={refButton}
                                        id="btn-checkout"
                                        onClick={handleCheckOut}
                                        className="btn btn-primary w-100">
                                    Pagar la compra
                                </button>
                                <div id="button-checkout"
                                     ref={refContainer}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
