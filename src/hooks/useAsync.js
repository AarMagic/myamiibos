import { useEffect, useState } from "react";

export const useAsync = (url) => {
    const [datos, setDatos] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.status)
            }

            const {amiibo} = await response.json();
            setDatos(amiibo);
        } catch (error) {
            console.error("Error fetch: ", error)
        }
    }

    const limitData = (number) => {
        const limiteData = datos.splice(0, number);
        return limiteData
    }

    useEffect(() => {
        getData();
    }, [])

    return {
        datos,
        limitData
    };

}