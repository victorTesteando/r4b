export const expectedHeaders = ['Name', 'Last Name', 'Email', 'Group'];

export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const validateCSV = (data: any[][]): string | null => {
    const headers = data[0];
    if (JSON.stringify(headers) !== JSON.stringify(expectedHeaders)) {
        return 'Estructura de columnas incorrecta';
    }

    for (let i = 1; i < data.length; i++) {
        const row = data[i];
        if (typeof row[0] !== 'string' || typeof row[1] !== 'string') {
            return 'Name y Last Name deben ser strings';
        }
        if (!validateEmail(row[2])) {
            return 'Email no tiene un formato válido';
        }
    }
    return null;
};

export const validateXLS = (data: any[][]): string | null => {
    const headers = data[0];
    if (JSON.stringify(headers) !== JSON.stringify(expectedHeaders)) {
        return 'Estructura de columnas incorrecta';
    }

    for (let i = 1; i < data.length; i++) {
        const row = data[i];
        if (typeof row[0] !== 'string' || typeof row[1] !== 'string') {
            return 'Name y Last Name deben ser strings';
        }
        if (!validateEmail(row[2])) {
            return 'Email no tiene un formato válido';
        }
    }
    return null;
};
