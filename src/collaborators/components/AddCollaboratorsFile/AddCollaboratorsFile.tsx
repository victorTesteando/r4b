"use client"

import DropZone from '@/components/DropZone/DropZone'
import { Button, Typography } from '@mui/material'

import './addCollaboratorsFile.css'
import Image from 'next/image'
import { validateCSV, validateXLS } from '@/collaborators/helpers/validationsDropZone'
import Link from 'next/link'
import { saveFile } from '@/store/collaboratos/addCollaboratosFileSlice';
import PreViewCollaborators from '../PreViewCollaborators/PreViewCollaborators'
import { useAppSelector } from '@/store'

const AddCollaboratorsFile = () => {
    const keys = ['name', 'lastName', 'email', 'group'];
    const fileData= useAppSelector((state) => state.fileSavedCollaborators.data)

    return (
        <>
            {fileData.length > 0 ? 
                <PreViewCollaborators data={fileData}/>:
                <div className="container-add-collaborators-file">
                    <div className="content-add-collaborators-file">
                        <div className="load-file">
                            <Typography>
                                Vamos a enviar un email a cada colaborador para comunicarles de vincular su cuenta, o registrarse en Rappi, si no tienen una cuenta creada
                            </Typography>
                            <DropZone validateCSV={validateCSV} validateXLS={validateXLS} keys={keys} saveFile={saveFile}/>
                        </div>
                        <div className='container-download-file'>
                            <Typography>
                                Sube el archivo patrón que contiene el nombre, apellidos, email corporativo y monto de créditos por línea a cada colaborador a agregar.
                            </Typography>
                            <div className="download-file">
                                <Typography className='download-file-title'>Bajar template</Typography>
                                <div className='container-text-download-file'>
                                    <Image
                                        src="/images/icons/load-file-collaborators.svg"
                                        width={25.79}
                                        height={27.59}
                                        alt="load Collaborators"
                                    />
                                    <Typography className='text-hover'>Archivo patrón de colaboradores</Typography>
                                </div>
                            </div>
                            <Typography>
                                O caso quiera puede ingresar manualmente <span className='text-hover'>aquí</span>
                            </Typography>
                        </div>
                    </div>
                    <div className='content-button'>
                        <Link href="/collaborators/add-collaborators" className='button-return'>Volver</Link>
                    </div>
                </div>
            } 
        </>
    )
}

export default AddCollaboratorsFile
