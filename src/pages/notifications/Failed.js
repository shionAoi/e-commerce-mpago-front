import React from 'react'
import {Link} from "react-router-dom";


export const Failed = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="error-template">
                        <h1 className="text-danger fs-1">PAGO FALLIDO</h1>
                        <h5 className="text-muted">Tu pago no se pudo completar</h5>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-danger btn-lg">
                                <span className="glyphicon glyphicon-home"></span>
                                Ir al principio </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
