'use client';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import './breadcrumb.css';

interface Path {
    path: string;
    label: string;
}

interface BreadcrumbProps {
    paths: Path[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ paths }) => {
    const currentPath = usePathname();

    return (
        <Breadcrumbs
            separator={
                <Image
                    src={"/images/icons/mayor-que.svg"}
                    height={24}
                    width={24}
                    alt='mayor que'
                />
            }>
            {paths.map(item => 
                <Link
                    key={item.path}
                    href={item.path}
                    className={`${item.path === currentPath ? 'text-primary selected-path' : 'text-secondary'}`}
                >
                    {item.label}
                </Link>,
            )}
        </Breadcrumbs>
    );
}

export default Breadcrumb;
