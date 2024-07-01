import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import AddPurchaseOrdersFile from "@/purchaseOrders/components/AddPurchaseOrdersFile/AddPurchaseOrdersFile";
import { Typography } from "@mui/material"

interface Path {
    path: string;
    label: string;
}

const paths: Path[] = [
    {path: '/', label: 'Inicio'},
    {path: '/purchase-orders', label: 'Ordenes de compra'},
    {path: '/purchase-orders/add-purchase-orders/file', label: 'Ordenes de compra'}
]

const PageAddPurchaseOrdersFile = () => {
    return (
        <div className="container-page">
            <div className="sub-container-page">
                <Breadcrumb paths={paths}/>
                <div className="content-page">
                    <div className="title-page-container">
                        <Typography variant="h5" className="title-page">Nueva orden de compra de créditos</Typography>
                    </div>
                    <AddPurchaseOrdersFile />
                </div>
            </div>
        </div>
    )
}

export default PageAddPurchaseOrdersFile;
