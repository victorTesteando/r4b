import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import AddPurchaseOrders from "@/purchaseOrders/components/AddPurchaseOrders/AddPurchaseOrders";
import { Typography } from "@mui/material";
import React from "react";

interface Path {
    path: string;
    label: string;
}

const paths: Path[] = [
    {path: '/', label: 'Inicio'},
    {path: '/purchase-orders', label: 'Ordenes de compra'},
    { path: '/purchase-orders/add-purchase-orders', label: 'Orden de compra' }
];

const PageAddPurchaseOrders = () => {
    return (
        <div className="container-page">
            <div className="sub-container-page">
                <Breadcrumb paths={paths} />
                <div className="content-page">
                    <div className="title-page-container">
                        <Typography variant="h5" className="title-page">Orden de compra</Typography>
                        <Typography className="subtitle-page">
                            Configura la orden de crédito, importando un archivo o rellenando los montos manualmente desde cero.
                        </Typography>
                    </div>
                    <AddPurchaseOrders />
                </div>
            </div>
        </div>
    );
}

export default PageAddPurchaseOrders;
