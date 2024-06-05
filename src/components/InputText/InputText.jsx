'use client'
import { FormControl, TextField } from '@mui/material'
import React, { forwardRef } from 'react'
import "./inputText.css"

const InputText = forwardRef(({ label, value, setValue, error, textError, ...props }, ref) => {
    return (
        <TextField
            fullWidth
            error
            id={label}
            label={label}
            value={value || ''}
            variant="filled"
            onChange={(event) => setValue(event.target.value)}
            className={`'input-text' ${error ? 'invalid-input' : 'input'}`}
            inputRef={ref}
            {...props}
        />
    )
})
InputText.displayName = "InputText";

export default InputText
