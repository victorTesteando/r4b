'use client'
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
import "./drawer.css";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Image from 'next/image';

const menuItemOrders = [
    {
        path: '/orders',
        icon: <CurrencyExchangeIcon fontSize='0' />,
        option: 'Ordenes de compra'
    },
    {
        path: '/relatorios',
        icon: <CurrencyExchangeIcon fontSize='0' />,
        option: 'Relátorios'
    }
]

const menuItemCompany = [
    {
        path: '/profile',
        icon: <CurrencyExchangeIcon fontSize='0' />,
        option: 'Perfil'
    },
    {
        path: '/admin',
        icon: <CurrencyExchangeIcon fontSize='0' />,
        option: 'Administradores'
    },
    {
        path: '/groups',
        icon: <CurrencyExchangeIcon fontSize='0' />,
        option: 'Grupos'
    },
    {
        path: '/collaborators',
        icon: <Image src="/images/icon-collaborators.svg" alt='collaborators' height={18} width={15.42} />,
        option: 'Colaboradores'
    }
]

export default function DrawerComponent() {
    const currentPath = usePathname().split('/')
    return (
        <div className='container-drawer' >
            <div className='sub-container-drawer'>
                <div className='sub-container'>
                <Typography className='subttle'>ORDENES</Typography>
                    {menuItemOrders.map(item => 
                        <Link href={item.path} key={item.option}>
                            <div className={`container-item ${item.path.includes(currentPath[1])  ? 'text-primary' : 'text-secondary'}`}>
                                {item.icon}
                                <Typography className='options'>{item.option}</Typography>
                            </div>
                        </Link>
                    )}
                </div>
                <div className='sub-container'>
                    <Typography className='subttle'>EMPRESA</Typography>
                    {menuItemCompany.map(item => 
                        <Link href={item.path} key={item.option}>
                            <div className={`container-item ${item.path.includes(currentPath[1])? 'text-primary' : 'text-secondary'}`}>
                                {item.icon}
                                <Typography className='options'>{item.option}</Typography>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
