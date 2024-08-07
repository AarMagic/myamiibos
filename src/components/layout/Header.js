import React, { useEffect, useState } from 'react'
import { NavLink, redirect, useNavigate, useParams } from 'react-router-dom'

export const Header = () => {
    const [visible, setVisible] = useState(false);
    const [errors, setErrors] = useState([]);
    let timeoutId = null;
    const navigate = useNavigate();

    const showSearch = () => {
        let value = visible ? false : true;
        setVisible(value);
    }

    const disableErrors = async () => {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            setErrors([])
        }, 4000)
    }

    useEffect(() => {
        if (errors.length > 0) {
            disableErrors()
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [errors])

    const searchAmiibo = e => {
        e.preventDefault();
        if (errors.length > 0) {
            setErrors([]);
        }
        try {
            const value = e.target.nameamiibo.value.trim();
            const newErrors = [];
            const pattern = new RegExp("^[A-Za-z0-9]+([ -][A-Za-z0-9]+)*$", "g");
            if (typeof value !== 'string') {
                newErrors.push("The value is not a string");
            }
            if (value.length < 3 || value.length > 30) {
                newErrors.push("The value must be between 3 and 30 characters");
            }

            if (!pattern.test(value)) {
                newErrors.push("Only characters from A to Z, numbers, '-' and spaces are allowed.")
            }

            if (newErrors.length > 0) {
                setErrors(newErrors);
                return;
            }

            navigate(`/search/${value}`)
            
        } catch (error) {
            setErrors(prev => [...prev], `Internal error: ${error}`)
        }
    }

    return (
        <>
            <header className='header-principal'>
                <h1>MyAmiibos</h1>
                <nav className='nav-principal'>
                    <form onSubmit={searchAmiibo} className="form-search" >
                        <div className={`icon-search ${visible ? "invisible" : "visible"}`} >
                            <img onClick={showSearch} src='/search.svg' alt='search icon' />
                        </div>
                        <div className={`search ${visible ? "visible" : "invisible"}`}>
                            <input type='search' name='nameamiibo' placeholder="Search a Amiibo" />
                            <input type='submit' className='button-search' value="Search" />
                        </div>
                    </form>
                    <ul>
                        <li>
                            <NavLink
                                to="/inicio"
                                className={({ isActive }) => isActive ? "active" : ""}
                            >Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/amiibos"
                                className={({ isActive }) => isActive ? "active" : ""}
                            >Amiibos</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/amiiboseries/"
                                className={({ isActive }) => isActive ? "active" : ""}
                            >Amiibo Series</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/gameseries/"
                                className={({ isActive }) => isActive ? "active" : ""}
                            >Amiibo GameSeries</NavLink>
                        </li>
                    </ul>
                </nav>
            </header >
            <div className='errors'>
                {
                    errors &&
                    errors.map((error, index) => {
                        console.log(error)
                        return <p key={index}>{error}</p>
                    })
                }
            </div>

        </>
    )
}
