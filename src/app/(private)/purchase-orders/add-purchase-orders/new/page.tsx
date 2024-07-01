import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import NewPurchaseOrder from "@/purchaseOrders/components/NewPurchaseOrder/NewPurchaseOrder";
import { Typography } from "@mui/material"

interface Path {
    path: string;
    label: string;
}

const paths: Path[] = [
    {path: '/', label: 'Inicio'},
    {path: '/purchase-orders', label: 'Ordenes de compra'},
    {path: '/purchase-orders/add-purchase-orders/new', label: 'Ordene de compra'}
]

const PageNewPurchaseOrders = () => {
    return (
        <div className="container-page">
            <div className="sub-container-page">
                <Breadcrumb paths={paths}/>
                <div className="content-page">
                    <div className="title-page-container">
                        <Typography variant="h5" className="title-page">Orden de compra</Typography>
                        <Typography className="subtitle-page">
                            Establece el monto de créditos a cada colaborador. 
                            Ellos recibirán los créditos automáticamente en su cuenta de Rappi. Los créditos són válidos por 3 meses.
                        </Typography>
                    </div>
                    <NewPurchaseOrder />
                    {/* <PreViewPurchaseOrders /> */}
                </div>
            </div>
        </div>
    )
}

export default PageNewPurchaseOrders;
