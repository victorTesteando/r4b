"use client"
import InputText from '@/components/InputText/InputText'
import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'

import "./formAddCollaborators.css"
import { FormHelperText, Typography } from '@mui/material'
import BasicSelect from '@/components/BasicSelect/BasicSelect'

const FormAddCollaborators = ({ index }) => {
    const { control } = useFormContext();

    return (
        <div className="form-collaborators">
            <div className='form-collaborators-item'>
                <Controller
                    name={`Collaborators.${index}.name`}
                    control={control}
                    rules={{
                        required: 'El nombre es obligatorio',
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: 'El nombre solo puede contener letras'
                        }
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <>
                            <InputText 
                                label="Nombre*" 
                                value={field.value} 
                                setValue={field.onChange} 
                                ref={field.ref} 
                                error={error}
                            />
                            {error && <p className='text-danger error-text'>{error.message}</p>}
                        </>
                    )}
                />
            </div>
            <div className='form-collaborators-item'>
                <Controller
                    name={`Collaborators.${index}.lastName`}
                    control={control}
                    rules={{
                        required: 'El apellido es obligatorio',
                        pattern: {
                            value: /^[A-Za-z]+$/,
                            message: 'El apellido solo puede contener letras'
                        }
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <>
                            <InputText 
                                label="Apellidos*" 
                                value={field.value} 
                                setValue={field.onChange} 
                                ref={field.ref} 
                                error={error}
                            />
                            {error && <p className='text-danger error-text'>{error.message}</p>}
                        </>
                    )}
                />
            </div>
            <div className='form-collaborators-item'>
                <Controller
                    name={`Collaborators.${index}.email`}
                    control={control}
                    rules={{
                        required: 'El correo es obligatorio',
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                            message: 'El correo no es válido'
                        }
                    }}
                    render={({ field, fieldState: { error } }) => (
                        <>
                            <InputText 
                                label="E-mail*" 
                                value={field.value} 
                                setValue={field.onChange} 
                                ref={field.ref} 
                                error={error}
                            />
                            {error && <p className='text-danger error-text'>{error.message}</p>}
                        </>
                    )}
                />
            </div>
            <div className='form-collaborators-item'>
                <Controller
                    name={`Collaborators.${index}.group`}
                    control={control}
                    render={({ field }) => (
                        <InputText 
                            label="Elige un grupo" 
                            value={field.value} 
                            setValue={field.onChange} 
                            ref={field.ref}
                        />
                    )}
                />
            </div>
        </div>
    )
}

export default FormAddCollaborators
