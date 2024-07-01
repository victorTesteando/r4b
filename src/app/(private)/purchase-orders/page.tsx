import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import EmptyPurchaseOrders from '@/purchaseOrders/components/EmptyPurchaseOrders/EmptyPurchaseOrders';
import { Typography } from '@mui/material'
import React from 'react'

interface Path {
    path: string;
    label: string;
}

const paths: Path[] = [
    {path: '/', label: 'Inicio'},
    {path: '/purchase-orders', label: 'Ordenes de compra'}
]

const PagePurchaseOrders = () => {
    return (
        <div className="container-page">
            <div className="sub-container-page">
                <Breadcrumb paths={paths}/>
                <div className="content-page">
                    <div className="title-page-container">
                        <Typography variant="h5" className="title-page">Ordenes de compra</Typography>
                        <Typography className="subtitle-page">
                            Configura la orden de crédito, importando un archivo o ingresando los montos manualmente. Al solicitar la orden de crédito, iremos enviar un e-mail a los colaboradores para que vinculen su cuenta o subscriben a Rappi, si todavía no tienen una creada. 
                            Una vez la cuenta esté vinculada, los colaboradores van a ver automaticamente los créditos disponibles para uso.
                        </Typography>
                    </div>
                    <EmptyPurchaseOrders />
                </div>
            </div>
        </div>
    )
}

export default PagePurchaseOrders