import { Button, Typography } from '@mui/material'
import './emptyCollaborators.css'
import Image from 'next/image'
import Link from 'next/link'

const EmptyCollaborators = () => {
    return (
        <div className='content-empty'>
            <Typography className='text-empty'>
                Vamos a enviar un e-mail a cada colaborador solicitando que vinculen su cuenta o subscriben a Rappi, si todavía no tienen una creada.
                Una vez la cuenta esté vinculada, los colaboradores van a ver automaticamente los créditos disponibles para uso.
            </Typography>
            <div className='card-empty'>
                <div className='card-empty-content'>
                    <Image
                        src="/images/empty-collaborators.svg"
                        width={128}
                        height={128}
                        alt="empty"
                    />
                    <div className='sub-content'>
                        <div className='content-text'>
                            <Typography className='sub-content-title'>
                                Aún no tienes cargado ningún colaborador
                            </Typography>
                            <Typography className=''>
                                ¿Qué tal agregar la lista de colaboradores ya?
                            </Typography>
                        </div>
                        <Link href="collaborators/add-collaborators" className='button-fill sub-content-button'>Agregar colaboradores</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyCollaborators
