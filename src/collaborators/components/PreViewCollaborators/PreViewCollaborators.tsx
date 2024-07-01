import { SnackbarComponent } from '@/components/SnackBar/SnackBar';
import Image from 'next/image';
import TableComponent from '@/components/Table/Table';

interface Column {
    label: string;
}

interface Data {
    name: string;
    lastName: string;
    email: string;
    group: string;
}

interface PreViewCollaboratorsProps {
    data: Data[];
}

const columns: Column[] = [
    { label: 'Nombre' },
    { label: 'Apellido' },
    { label: 'Email' },
    { label: 'Grupo' }
]

const PreViewCollaborators: React.FC<PreViewCollaboratorsProps> = ({ data }) => {
    return (
        <>
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
            {/* <TableComponent rows={data} columns={columns}/> */}
        </>
    )
}

export default PreViewCollaborators;
