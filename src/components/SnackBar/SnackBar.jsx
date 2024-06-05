"use client"
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { Typography } from '@mui/material';


import "./snackBar.css"
import Image from 'next/image';

export const SnackbarComponent = ({text, icon, vertical, horizontal}) => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Snackbar
                className='snackbar'
                autoHideDuration={60000000}
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={
                    <div className='content-bar'>
                        <div className='container-text'>
                            {icon}
                            <Typography>{text}</Typography>
                        </div>
                        <Image
                            src="/images/ok.svg"
                            alt="ok"
                            height={20}
                            width={21}
                            onClick={handleClose}
                            className='close-button'
                        />
                        {/* <Button className='close-button' onClick={handleClose}>OK</Button> */}
                    </div>
                }
                key={vertical + horizontal}
            />
        </div>
    );
}
