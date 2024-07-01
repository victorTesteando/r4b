"use client";

import { useEffect, useState } from "react";
import CookiesExist from '../CookiesExist/CookiesExist';
import RedirectRappi from "../RedirectRappi/RedirectRappi";
import { cookieExists } from "@/link/helpers/cookieExists";
import { Typography } from "@mui/material";
import "./validateCookies.css";

const ValidateCookies: React.FC = () => {
    const [cookieExist, setCookieExist] = useState<string | null>(null);
    const [validatingCookies, setValidatingCookies] = useState<boolean>(true);

    useEffect(() => {
        const encodedValue = cookieExists({ name: 'rappi.id' });

        if (encodedValue) {
            setCookieExist(encodedValue);
        } else {
            setCookieExist(null);
        }
        setValidatingCookies(false);
    }, []);

    return (
        <div className="container-link">
            {validatingCookies ? (
                <Typography>Vinculando tu cuenta…</Typography>
            ) : cookieExist ? (
                <CookiesExist cookieExist={cookieExist} />
            ) : (
                <RedirectRappi />
            )}
        </div>
    );
}

export default ValidateCookies;
