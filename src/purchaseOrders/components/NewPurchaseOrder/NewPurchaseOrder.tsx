"use client"
import StepperComponent from '../StepperComponent/StepperComponent'
import { SnackbarComponent } from '@/components/SnackBar/SnackBar'
import { useAppSelector } from '@/store'
import Image from 'next/image'
import { redirect } from 'next/navigation'

interface Data {
    name: string;
    lastName: string;
    email: string;
    group: string;
}
const NewPurchaseOrder = () => {
    const data: Data[] = useAppSelector((state) => state.fileSavedPurchaseOrder.data);

    if(data.length === 0) {
        redirect('/purchase-orders/add-purchase-orders/file')
    }
    return (
        <>
            <StepperComponent />
            <SnackbarComponent 
                text="Archivo leído con éxito" 
                icon={
                    <Image 
                        src="/images/icons/snackbar-warning.svg"
                        alt="warning"
                        height={20}
                        width={20}
                    />} 
                vertical="top" 
                horizontal="center"
            />
        </>
    )
}

export default NewPurchaseOrder
