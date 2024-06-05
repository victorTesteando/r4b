import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import React, { forwardRef } from 'react'
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
const BasicSelect = forwardRef(({ label, value, setValue, error, textError, ...props }, ref) => {
    const handleChange = (event) => {
        // const {
        //   target: { value },
        // } = event;
        // setPersonName(
        //   // On autofill we get a stringified value.
        //   typeof value === 'string' ? value.split(',') : value,
        // );
    };
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                // multiple
                value={value}
                onChange={handleChange}
            inputRef={ref}
            input={<OutlinedInput label="Name" />}
            >
                {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
})

export default BasicSelect
