export const expectedHeaders = ['Name', 'LastName', 'Email', 'Amount', 'Group'];

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
        if (typeof row[0] !== 'string' && typeof row[1] !== 'string') {
            return 'Nombre debe ser strings';
        }
        if (typeof row[3] !== 'number') {
            return 'Creditos debesssss ser un numero';
        }
        if (!validateEmail(row[2])) {
            return 'Email no tiene un formato válido';
        }
    }
    return null;
};

export const validateXLS = (data: any[][]): string | null => {
    const headers = data[0];
    console.log(headers)
    if (JSON.stringify(headers) !== JSON.stringify(expectedHeaders)) {
        return 'Estructura de columnas incorrecta';
    }

    for (let i = 1; i < data.length; i++) {
        const row = data[i];
        console.log(row)
        if (typeof row[0] !== 'string' && typeof row[1] !== 'string') {
            return 'Nombre debe ser strings';
        }
        if (typeof row[3] !== 'number') {
            return 'Creditos debesssss ser un numero';
        }
        if (!validateEmail(row[2])) {
            return 'Email no tiene un formato válido';
        }
    }
    return null;
};
