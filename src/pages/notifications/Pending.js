import React from 'react'
import {Link} from "react-router-dom";

export const Pending = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="error-template">
                        <h1 className="text-warning fs-1">SU PAGO SE ENCUENTRA PENDIENTE</h1>
                        <h5 className="text-muted">Tu pago esta pendiente</h5>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-warning btn-lg">
                                <span className="glyphicon glyphicon-home"></span>
                                Ir al principio </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
