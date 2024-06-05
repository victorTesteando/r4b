"use client"

import { useEffect, useState } from "react"
import CookiesExist from "../CookiesExist/CookiesExist"
import RedirectRappi from "../RedirectRappi/RedirectRappi"
import { cookieExists } from "@/link/functions/cookieExists"
import { Typography } from "@mui/material"

import "./validateCookies.css"

const ValidateCookies = () => {
    const [cookieExist, setCookieExist] = useState(true)
    const [validatingCookies, setValidatingCookies] = useState(true)

    useEffect(() => {
        if (cookieExists('rappi.id')) {
            setCookieExist(true)
            setValidatingCookies(false)
        } else {
            setCookieExist(false)
            setValidatingCookies(false)
        }
    }, [])

    return (
        <div className="container-link">
            {validatingCookies ? <Typography>validando</Typography>: cookieExist ? (<CookiesExist />) : (<RedirectRappi />)}
        </div>
    )
}

export default ValidateCookies