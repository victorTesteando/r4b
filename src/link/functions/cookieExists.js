export const cookieExists = (name) => {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].startsWith(name)) {
            return true;
        }
    }
    return false;
}