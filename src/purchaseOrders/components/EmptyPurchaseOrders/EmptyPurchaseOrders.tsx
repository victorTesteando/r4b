import { Button, Typography } from '@mui/material'
import './emptyPurchaseOrders.css'
import Image from 'next/image'
import Link from 'next/link'

const EmptyPurchaseOrders = () => {
    return (
        <div className='card-empty'>
            <div className='card-empty-content'>
                <Image
                    src="/images/icons/empty-purchase-orders.svg"
                    width={128}
                    height={128}
                    alt="empty"
                />
                <div className='sub-content'>
                    <div className='content-text'>
                        <Typography className='sub-content-title'>
                            Aún no tienes configurada ninguna orden de compra
                        </Typography>
                        <Typography className=''>
                            ¿Qué tal configurar la orden de crédito ya?
                        </Typography>
                    </div>
                    <Link href="purchase-orders/add-purchase-orders" className='button-fill sub-content-button'>Crear orden de compra</Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyPurchaseOrders
