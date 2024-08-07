import { useEffect, useState } from "react"

export const useArray = ({ data = [], separation }) => {
    const [dataState, setDataState] = useState([]);
    const [separationState, setSeparationState] = useState(0);

    useEffect(() => {
        if (data.length > 0) {
            setDataState(data)
            console.log(1)
            if (separation > 0) {
                setSeparationState(separation)
            }
        }
    }, [data, separation])

    const limitData = (numberOfData) => {
        try {
            if (Array.isArray(dataState) && dataState.length > 0) {
                if (numberOfData > 0) {
                    return dataState.slice(0, numberOfData);
                }
                throw new Error("The number of data is less than or equals to 0")
            }
            throw new Error("Data is not an array or the array is empty");
        } catch (error) {
            console.error(`"Error in limiting data: ${error}`)
            return []
        }

    }

    return {
        data: dataState,
        setData: setDataState,
        limitData
    }
}