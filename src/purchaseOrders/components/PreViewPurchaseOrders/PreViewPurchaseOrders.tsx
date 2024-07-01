import SummaryPurchaseOrders from "./components/SummaryPurchaseOrders";
import TablePreViewPurchaseOrders from "./components/TablePreViewPurchaseOrders";
import "./preViewPurchaseOrders.css"
const PreViewPurchaseOrders = () => {
    return (
        <div className="container-new-orders">
            <SummaryPurchaseOrders />
            <TablePreViewPurchaseOrders />
        </div>
    )
}

export default PreViewPurchaseOrders;
