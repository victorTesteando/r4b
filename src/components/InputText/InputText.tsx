'use client'
import { FormControl, TextField, TextFieldProps } from '@mui/material';
import React, { forwardRef } from 'react';
import "./inputText.css";

interface InputTextProps extends Omit<TextFieldProps, 'error'> {
    label: string;
    value: string;
    setValue: (value: string) => void;
    error?: boolean;
    textError?: string;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(({
    label,
    value,
    setValue,
    error = false,
    textError,
    ...props
}, ref) => {
    return (
        <TextField
            fullWidth
            error={error}
            id={label}
            label={label}
            value={value || ''}
            variant="filled"
            onChange={(event) => setValue(event.target.value)}
            className={`input-text ${error ? 'invalid-input' : 'input'}`}
            inputRef={ref}
            helperText={error ? textError : ''}
            {...props}
        />
    );
});

InputText.displayName = "InputText";

export default InputText;
