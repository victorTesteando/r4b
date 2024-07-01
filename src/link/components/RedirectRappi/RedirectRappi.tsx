"use client";
import { getOriginURL } from '@/helpers/getOriginURL';
import { Typography } from '@mui/material';
import { useEffect } from 'react';

const RedirectRappi = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search).toString();
        const businessRappiLink = getOriginURL('/link?');
        const redirectUrl = params ? `${businessRappiLink}?${params}` : businessRappiLink;

        if (redirectUrl) {
            const encodedRedirectUrl = encodeURIComponent(redirectUrl);
            const urlBase = `${process.env.NEXT_PUBLIC_URL_LOGIN_RAPPI}?url_redirect=${encodedRedirectUrl}`;
            
            if (urlBase) {
                window.location.href = urlBase;
            }
        }
    }, []);

    return (
        <div>
            <Typography>Te estamos llevando a la página de login</Typography>
        </div>
    );
}

export default RedirectRappi;
