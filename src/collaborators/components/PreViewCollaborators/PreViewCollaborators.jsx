
// import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./preViewCollaborators.css"
import { SnackbarComponent } from '@/components/SnackBar/SnackBar';
import Image from 'next/image';
import { AdfScannerSharp, AdsClick } from '@mui/icons-material';
import { Button } from '@mui/material';
import TableComponent from '@/components/Table/Table';

const columns = [
    {label: 'Nombre'},
    {label: 'Apellido'},
    {label: 'Email'},
    {label: 'Grupo'}
]

const PreViewCollaborators = ({data}) => {
    return (
        <>
            <SnackbarComponent 
                text="Archivo leído con éxito" 
                icon={
                    <Image 
                        src="/images/snackbar-warning.svg"
                        alt="warning"
                        height={20}
                        width={20}
                    />} 
                vertical="top" 
                horizontal="center"
            />
            {/* <TableContainer component="div">
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Apellido<Button>°</Button></TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Grupo</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.email}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.group}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
            <TableComponent rows={data} columns={columns}/>
        </>
    )
}

export default PreViewCollaborators