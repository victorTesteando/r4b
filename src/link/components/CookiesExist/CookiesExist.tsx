"use client";
import React, { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
import RedirectRappi from '../RedirectRappi/RedirectRappi';
import fetchDataMSRappi from '@/helpers/fetchDataMSRappi';
import ValidateAccount from '../ValidateAccount/ValidateAccount';

interface CookiesExistProps {
    cookieExist: string;
}

const CookiesExist: React.FC<CookiesExistProps> = ({ cookieExist }) => {
    const [requestFailed, setRequestFailed] = useState<boolean>(false);
    const [validating, setValidating] = useState<boolean>(true);
    const { access_token } = JSON.parse(atob(cookieExist));

    useEffect(() => {
        const getData = async () => {
            try {
                await fetchDataMSRappi('application-user/auth', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    },
                });
                setRequestFailed(false);
            } catch (error) {
                setRequestFailed(true);
            } finally {
                setValidating(false);
            }
        };
        getData();
    }, [access_token]);

    return (
        <div>
            {validating ? (
                <Typography>Vinculando tu cuenta…</Typography>
            ) : (
                requestFailed ? (
                    <RedirectRappi />
                ) : (
                    <ValidateAccount cookieExist={cookieExist} />
                )
            )}
        </div>
    );
}

export default CookiesExist;
