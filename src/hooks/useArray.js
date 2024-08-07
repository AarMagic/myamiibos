import { useEffect, useState } from "react"

export const useArray = ({ data = [], separation }) => {
    const [dataState, setDataState] = useState([]);
    const [separationState, setSeparationState] = useState(0);
    const [groupState, setGroupState] = useState({
        from: 0,
        to: 0
    })

    useEffect(() => {
        if (data.length > 0) {
            setDataState(data)
        }
    }, [data])

    useEffect(() => {
        if (separation > 0) {
            setSeparationState(separation)
            setGroupState({
                from: 0,
                to: separation
            })
        }
    }, [separation])



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
    const setGroup = (type = "next") => {
        try {
            if (!Array.isArray(dataState) || dataState.length === 0) {
                throw new Error("Data is not an array")
            }

            setGroupState(prevState => {
                let newFrom, newTo;
                if (type === "previous") {
                    if (prevState.from - separationState >= 0) {
                        newFrom = prevState.from - separationState;
                        newTo = prevState.from;
                    } else {
                        newFrom = 0;
                        newTo = separationState;
                    }
                } else {
                    if (prevState.to + separationState <= dataState.length) {
                        newFrom = prevState.to;
                        newTo = prevState.to + separationState;
                    } else {
                        newFrom = Math.floor((dataState.length - separationState) / 10) * 10;
                        newTo = dataState.length;
                    }
                }
                if (newFrom !== prevState.from || newTo !== prevState.to) {
                    return {from: newFrom, to: newTo}
                }
                return prevState
            })

        } catch (error) {
            console.error(`Error in setGroup: ${error}`)
        }
    }
    const setNextGroup = () => {
        setGroup()
    }
    const setpreviousGroup = () => {
        setGroup("previous")
    }

    const getGroup = () => {
        try {
            if (groupState.from === 0 && groupState.to === 0) {
                throw new Error("Group not defined")
            }
            const { from, to } = groupState;

            return dataState.slice(from, to);
        } catch (error) {
            console.error(`Error in getGroup: ${error}`)
        }
    }

    return {
        data: dataState,
        setData: setDataState,
        limitData,
        setNextGroup,
        setpreviousGroup,
        getGroup,
        group: groupState
    }
}