import React from 'react'
import { Descripcion } from './Descripcion'
import '../styles/CabeceraActividad.css'
function CabeceraActividad(props) {
    const title=props.title
    return (
    <div className='actividad'>
        <div className='actividad-img'>
        {title}
        </div>
        <div className='actividad-body'>
            <Descripcion/>
        </div>
    </div>

  )
}

export {CabeceraActividad}