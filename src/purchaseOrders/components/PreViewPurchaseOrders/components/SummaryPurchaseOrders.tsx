"use client"
import { useAppSelector } from '@/store';
import TablePreViewPurchaseOrders from './TablePreViewPurchaseOrders';
import { useState } from 'react';


interface Order {
    name: string;
    lastName: string;
    email: string;
    amount: number;
    group?: string;
}

const SummaryPurchaseOrders = () => {
    const [breakdown, setBreakdown] = useState(false);
    const orders: Order[] = useAppSelector((state) => state.fileSavedPurchaseOrder.data);
    const amoutn = orders.reduce((sum, curr) => sum + curr.amount, 0)  
    const formattedAmount = new Intl.NumberFormat('es-ES', {
        currency: 'COP'
    }).format(amoutn);
    return (
        <div>
            <div className="container-summary">
                <div className="content-summary">
                    <div className="status-order">
                        <span className="title">Estado</span>
                        <span className="value text-primary">Nuevo</span>
                    </div>
                    <div className="total-collaboratos">
                        <span className="title">Total de colaboradores</span>
                        <span className="value">{orders.length}</span>
                    </div>
                    <div className="total-credits">
                        <span className="title">Total de créditos</span>
                        <span className="value">
                            ${formattedAmount}
                        </span>
                    </div>
                    <div className="breakdown" onClick={() => setBreakdown(!breakdown)}>
                        <span className="title">Desglose</span>
                        <span className="value">~</span>
                    </div>
                </div>
            </div>
                {/* {breakdown && (
                    <TablePreViewPurchaseOrders />
                )} */}
        </div>
    )
}

export default SummaryPurchaseOrders
