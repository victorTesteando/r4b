import EmptyCollaborators from '@/collaborators/components/EmptyCollaborators/EmptyCollaborators'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import { Typography } from '@mui/material'
import React from 'react'

const paths = [
    {path: '/', label: 'Inicio'},
    {path: '/collaborators', label: 'Colaboradores'}
]

const pageCollaborator = () => {
    return (
        <div className="container-page">
            <div className="sub-container-page">
                <Breadcrumb paths={paths}/>
                <div className="content-page">
                    <Typography variant="div" className="title-page">Colaboradores</Typography>
                    <EmptyCollaborators />
                </div>
            </div>
        </div>
    )
}

export default pageCollaborator
