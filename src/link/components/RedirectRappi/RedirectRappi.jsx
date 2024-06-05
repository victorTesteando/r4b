"use client"
import { useEffect } from 'react';

const RedirectRappi = () => {
    useEffect(() => {
        // Redireccionar a la página deseada
        window.location.href = 'http://rappi.com.co/login?url_redirect=http%3A%2F%2Flocalhost%3A3000%2Flink';
    }, []);

    return null;
}

export default RedirectRappi;
