"use client";
import React, { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";
import fetchDataMSBusiness from '@/helpers/fetchDataMSBusiness';

interface ValidateAccountProps {
    cookieExist: string;
}

const getUrlParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        securityLinkHash: urlParams.get('security_link_hash'),
        company: urlParams.get('company'),
        collaborator: urlParams.get('collaborator')
    };
};

const ValidateAccount: React.FC<ValidateAccountProps> = ({ cookieExist }) => {
    const [requestFailed, setRequestFailed] = useState(false);

    useEffect(() => {
        const { securityLinkHash, collaborator } = getUrlParams();

        const getData = async () => {
            try {
                await fetchDataMSBusiness(`collaborators/link/${collaborator}`, {
                    method: 'PUT',
                    headers: {
                        'security_link_hash': securityLinkHash || ''
                    },
                    data: {
                        'rappi_user_application_hash': cookieExist
                    }
                });
                setRequestFailed(false);
            } catch (error) {
                console.error('Error al vincular la cuenta:', error);
                setRequestFailed(true);
            }
        };

        getData();
    }, [cookieExist]);

    return (
        <div>
            {requestFailed ? (
                <Typography>
                    No hemos podido validar su cuenta. Por favor, inténtelo de nuevo.
                </Typography>
            ) : (
                <Typography>
                    Su cuenta ha sido vinculada. Ahora puedes recibir créditos de Unilever.
                </Typography>
            )}
        </div>
    );
};

export default ValidateAccount;
