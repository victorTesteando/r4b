import AddCollaborators from "@/collaborators/components/AddCollaborators/AddCollaborators"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { Typography } from "@mui/material"

const paths = [
    {path: '/', label: 'Inicio'},
    {path: '/collaborators', label: 'Colaboradores'},
    {path: '/collaborators/add-collaborators', label: 'Nuevos colaboradores'}
]

const pageAddCollaborator = () => {
    return (
        <div className="container-page">
            <div className="sub-container-page">
                <Breadcrumb paths={paths}/>
                <div className="content-page">
                    <Typography variant="div" className="title-page">Agregar colaboradores</Typography>
                    <AddCollaborators />
                </div>
            </div>
        </div>
    )
}

export default pageAddCollaborator
