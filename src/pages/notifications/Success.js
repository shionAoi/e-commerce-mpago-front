import React from 'react'
import {Link, useLocation} from "react-router-dom";
import {useQuery} from "../../hooks/use-query";

export const Success = () => {
    const location = useLocation()
    const query = useQuery(location.search)
    const data = {
        collection_id: query.get('collection_id'),
        collection_status: query.get('collection_status'),
        external_reference: query.get('external_reference'),
        payment_type: query.get('payment_type'),
        preference_id: query.get('preference_id'),
        site_id: query.get('site_id'),
        processing_mode: query.get('processing_mode'),
        merchant_account_id: query.get('merchant_account_id')
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-sm-offset-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h2 style={{"color": "#0fad00", fontSize: '48px'}}>
                                Success
                            </h2>
                            <p>Payment Type <strong>{data.payment_type}</strong></p>
                            <p>External Reference <strong>{data.external_reference}</strong></p>
                            <p>ID de Pago <strong>{data.collection_id}</strong></p>
                            <p style={{fontSize: "20px", color: "#5C5C5C"}}>
                                Gracias por pagar con MERCADO PAGO
                            </p>
                            <div className="error-actions">
                                <Link to="/" className="btn btn-success btn-lg">
                                    <span className="glyphicon glyphicon-home"></span>
                                    Ir al principio </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
