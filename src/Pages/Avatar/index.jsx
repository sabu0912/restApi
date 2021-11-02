import React, { useEffect, useState } from 'react'

import './style.scss'


const Avatar = () => {
    const [user, setUser] = useState(null)
    
    const obtenerUser = async () => {
        const resul = await fetch('https://randomuser.me/api/')
        const data = await resul.json()
        setUser(data.results[0]);

    }

    useEffect(() => {
      obtenerUser()
    },[]) 

    const obtenerAvatar = () => {
        obtenerUser()
    }

    return (
        <div>
            {user ? (<div className='p_avatar__wrapper'>
                <p>Nombre: {user.name.title}</p>
                <p>Primer Nombre: {user.name.first}</p>
                <p>Apellido: {user.name.last}</p>
                <p>Telefono: {user.phone}</p>
                <img src={user.picture.large} alt="" />
            </div>) : 'no existe nombre'}
            
            <button onClick={obtenerAvatar}>Obtener Imagen</button>
        </div>
    )
}

export default Avatar
