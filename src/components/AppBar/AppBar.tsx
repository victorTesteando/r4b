'use client'
import * as React from 'react';
import './appBar.css'
import Image from 'next/image';
import { Avatar } from '@mui/material';
// import { useSession } from 'next-auth/react';


const AppBarComponent = () =>{
    // const { data: session, status } = useSession();

    return (
        <nav className='container-bar'>
            <div className='content-icons'>
                <Image
                    src="/images/icons/icon-right.svg"
                    width={24}
                    height={24}
                    alt="Icon right"
                    className='icon-right'
                />
                <Image
                    src="/images/logo.svg"
                    width={192}
                    height={28}
                    alt="Logo"
                />
            </div>
            <div className='spacing'></div>
            <div className='user-container'>
                <div className='user-text text-secondary'>
                    <span className='user-name'>Joel Spiro</span>
                    <span className='company'>Unilever</span>
                </div>
                <Avatar>J</Avatar>
            </div>
        </nav>
    );
}
export default AppBarComponent;
