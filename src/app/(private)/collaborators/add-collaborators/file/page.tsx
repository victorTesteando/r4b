import AddCollaboratorsFile from "@/collaborators/components/AddCollaboratorsFile/AddCollaboratorsFile"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import { Typography } from "@mui/material"

interface Path {
    path: string;
    label: string;
}

const paths: Path[] = [
    {path: '/', label: 'Inicio'},
    {path: '/collaborators', label: 'Colaboradores'},
    {path: '/collaborators/add-collaborators/file', label: 'Nuevos colaboradores'}
]

const pageAddCollaborator: React.FC = () => {
    return (
        <div className="container-page">
            <div className="sub-container-page">
                <Breadcrumb paths={paths}/>
                <div className="content-page">
                    <Typography variant="h5" className="title-page">Agregar colaboradores</Typography>
                    <AddCollaboratorsFile />
                </div>
            </div>
        </div>
    )
}

export default pageAddCollaborator;
