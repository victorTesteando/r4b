
import Image from 'next/image'
import { Typography } from '@mui/material'
import './addPurchaseOrders.css'
import Link from 'next/link'

const AddPurchaseOrders = () => {
    return (
        <div className='container-cards'>
            <div className="card-load-file">
                <div className='container-content-card'>
                    <Image
                        src="/images/icons/load-file.svg" 
                        width={43.17}
                        height={47.83}
                        alt="load-file"
                    />
                    <Typography className='text-load-file'>
                        Importar archivo
                    </Typography>
                    <div className='container-description'>
                        <Typography className='text-description'>
                            Al importar archivo, el sistema lee sus datos y
                            prepara la orden de compra de forma automática
                        </Typography>
                    </div>
                </div>
                <Link href="/purchase-orders/add-purchase-orders/file" className='button-fill'>
                    Seguir
                </Link>
            </div>
            <div className='card-download-file'>
                <div className='container-content-card'>
                    <Image
                        src="/images/icons/manual-input.svg"
                        width={43.17}
                        height={47.83}
                        alt="load-file"
                    />
                    <Typography className='text-load-file'>
                        Ingreso manual
                    </Typography>
                    <div className='container-description'>
                        <Typography className='text-description'>
                            Informe los datos del orden de compra directamente desde el formulario, 
                            rellenando el e-mail y monto de crédito del colaborador
                        </Typography>
                    </div>
                </div>
                <Link href="/purchase-orders/add-purchase-orders/manually" className='button-fill'>
                    Seguir
                </Link>
            </div>
        </div>
    )
}

export default AddPurchaseOrders
