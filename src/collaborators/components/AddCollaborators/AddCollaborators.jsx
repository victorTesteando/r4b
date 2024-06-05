
import Image from 'next/image'
import { Typography } from '@mui/material'
import './addCollaborators.css'
import Link from 'next/link'

const AddCollaborators = () => {
    return (
        // <>
        //     {
        //         file ? (
        //             <>
                    
        //                 {fileData.length > 0 ? 
        //                     <PreViewCollaborators data={fileData}/>:
        //                     <AddCollaboratorsFile />
        //                 } 
                        
        //             </>
        //         ) : manually ? (
        //             <AddCollaboratorsManually />
        //         ) : 
        //         <div className="content-add-collaborators">
        //             <Typography>
        //                 Configura los colaboradores, importando un archivo o ingresando los colaboradores manualmente desde zero.
        //             </Typography>
        //             <div className='container-cards'>
        //                 <div className="card-load-file" onClick={() => setFile(true)}>
        //                     <Image
        //                         src="/images/load-file.svg" 
        //                         width={43.17}
        //                         height={47.83}
        //                         alt="load-file"
        //                     />
        //                     <Typography className='text-load-file'>
        //                         Importar archivo
        //                     </Typography>
        //                     <div className='container-description'>
        //                         <Typography className='text-description'>
        //                             Al importar archivo, el sistema lee sus datos y
        //                             prepara los colaboradores de forma automática
        //                         </Typography>
        //                     </div>
        //                 </div>
        //                 <div className="card-download-file" onClick={() => setManually(true)}>
        //                     <Image
        //                         src="/images/manual-input.svg"
        //                         width={43.17}
        //                         height={47.83}
        //                         alt="load-file"
        //                     />
        //                     <Typography className='text-load-file'>
        //                         Ingreso manual
        //                     </Typography>
        //                     <div className='container-description'>
        //                         <Typography className='text-description'>
        //                             Informe los datos de los colaboradores directamente desde el formulario, 
        //                             rellenando el nombre, apellido, e-mail y grupo del colaborador
        //                         </Typography>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     }
        //      { manually || file ? (
        //         <div>
        //             <Button onClick={returnOptions} className='button-return'>Volver</Button>
        //         </div>
        //     ):(null)
        //     } 
        // </>
        <div className="content-add-collaborators">
            <Typography>
                Configura los colaboradores, importando un archivo o ingresando los colaboradores manualmente desde zero.
            </Typography>
            <div className='container-cards'>
                <div className="card-load-file">
                    <div className='container-content-card'>
                        <Image
                            src="/images/load-file.svg" 
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
                                prepara los colaboradores de forma automática
                            </Typography>
                        </div>
                    </div>
                    <Link href="/collaborators/add-collaborators/file" className='button-fill'>
                        Seguir
                    </Link>
                </div>
                <div className='card-download-file'>
                    <div className='container-content-card'>
                        <Image
                            src="/images/manual-input.svg"
                            width={43.17}
                            height={47.83}
                            alt="load-file"
                        />
                        <Typography className='text-load-file'>
                            Ingreso manual
                        </Typography>
                        <div className='container-description'>
                            <Typography className='text-description'>
                                Informe los datos del colaborador directamente desde el formulario, 
                                rellenando el e-mail, nombre, apellido
                            </Typography>
                        </div>
                    </div>
                    <Link href="/collaborators/add-collaborators/manually" className='button-fill'>
                        Seguir
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AddCollaborators
