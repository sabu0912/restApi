import React, { useEffect, useState } from 'react'

const Personajes = () => {
    const [name, setName] = useState('iron man')
    const [personaje, setPersonaje] = useState([])

    const obtenerPersonaje = async () => {
        
        const resul = await fetch(`https://www.superheroapi.com/api.php/10158661380362377/search/${name}`)
        const data = await resul.json()
        setPersonaje(data.results);

    }

    useEffect(() => {
        obtenerPersonaje()
    }, [])

    const nuevoNombre = (e) => {
        setName(e.target.value);
    }

    const traerPersonaje = (e) => {
        e.preventDefault()
        obtenerPersonaje()
    }

    return (
        <div>
            <form>
                <label>Nombre Personaje</label>
                <input onChange={nuevoNombre} type="text" />
                <button onClick={traerPersonaje}>Obtener Personaje</button>
            </form>

            {personaje ? personaje.map(p => (
                <div>
                    <p>Nombre: {p.name}</p>
                    <img src={p.image.url} alt="" />
                </div>
                
            )) : 'non existe personaje'}

        </div>
    )
}

export default Personajes
