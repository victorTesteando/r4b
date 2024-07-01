interface Props {
    name: string;
}

export const cookieExists = ({ name }: Props): string | null => {
    const cookies = document.cookie.split(';');

    const cookieValue = cookies.find(cookie => cookie.trim().startsWith(`${name}=`));
    
    if (cookieValue) {
        return cookieValue.split('=')[1];
    } else {
        return null;
    }
}
