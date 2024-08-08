import { useEffect, useState } from "react";

export const useAsync = (data) => {
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true)

    const getData = async (url = "") => {
        try {
            if (Array.isArray(data)) {
                setDatos(data)
            } else {
                const response = await fetch(data);
                if (!response.ok) {
                    throw new Error(response.status)
                }

                const { amiibo } = await response.json();
                const reduceArray = amiibo.filter((item, index, self) =>
                    index === self.findIndex((t) => (
                        t.name === item.name
                    ))
                );
                setDatos(reduceArray);
            }
            setCargando(false);

        } catch (error) {
            console.error("Error fetch: ", error)
        }
    }

    const setData = async (url) => {
        try {
            if (Array.isArray(url)) {
                setDatos(url)
            } else {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.status)
                }

                const { amiibo } = await response.json();
                let reduceArray = []
                if (amiibo.length > 1) {
                    reduceArray = amiibo.filter((item, index, self) =>
                        index === self.findIndex((t) => (
                            t.name === item.name
                        ))
                    );
                } else {
                    reduceArray = amiibo;
                }
                setDatos(reduceArray);
            }
            setCargando(false);

        } catch (error) {
            console.error("Error fetch: ", error)
        }
    }


    useEffect(() => {
        getData();
    }, [])

    return {
        datos,
        cargando,
        setData
    };

}