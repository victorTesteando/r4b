"use client"
import { Button, Typography } from "@mui/material"
import { useForm, FormProvider, useFieldArray, SubmitHandler } from "react-hook-form"
import "./addCollaboratorsManually.css"
import FormAddCollaborators from "../FormAddCollaborators/FormAddCollaborators"
import Link from "next/link"

interface Collaborator {
    name: string;
    lastName: string;
    email: string;
    group: string;
}

interface FormValues {
    Collaborators: Collaborator[];
}

const AddCollaboratorsManually: React.FC = () => {
    const methods = useForm<FormValues>({
        defaultValues: {
            Collaborators: [
                { name: '', lastName: '', email: '', group: '' },
                { name: '', lastName: '', email: '', group: '' }
            ]
        }
    });

    const { handleSubmit, control } = methods;
    const { fields, append } = useFieldArray({
        control,
        name: "Collaborators"
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    const createEmptyCollaborators = (num: number): Collaborator[] => {
        return Array.from({ length: num }, () => ({ name: '', lastName: '', email: '', group: '' }));
    };

    const addItems = (num: number) => {
        append(createEmptyCollaborators(num));
    };

    return (
        <div className="content-add-collaborators-manually">
            <div className="content-text">
                <Typography>
                    Puede ingresar manualmente acá todos los colaboradores necesarios. Filas sin datos no va a generar ningún registro.
                    O caso quiera, puede ingresar los colaboradores importando un archivo <span className='text-hover'>aquí</span>
                </Typography>
                <div className="container-form-collaborators">
                    <Typography>
                        Los campos marcados con * deben ser obligatoriamente rellenados.
                    </Typography>
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)} className="container-form-add-manually">
                            <div className="content-form-add-manually">
                                <div className="list-form">
                                    {fields.map((partner, index) => (
                                        <FormAddCollaborators key={partner.id} index={index} />
                                    ))}
                                </div>
                                <div>
                                    <span onClick={() => addItems(5)} className="text-hover">Adiciona </span>
                                    <span>más 5 líneas abajo</span>
                                </div>
                            </div>
                            <div className="footer-add-collaborators-manually">
                                <Link href="/collaborators/add-collaborators" className='button-return'>Volver</Link>
                                <div className="footer-save-add-collaborators-manually">
                                    <Typography className="text-save">
                                        Vamos a enviar un email a cada colaborador para comunicarles de vincular su cuenta, o registrarse en Rappi, si no tienen una cuenta creada
                                    </Typography>
                                    <Button type="submit" className="button-fill button">Guardar</Button>
                                </div>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    )
}

export default AddCollaboratorsManually
