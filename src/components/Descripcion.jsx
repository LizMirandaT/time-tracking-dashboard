import React from 'react'
import '../styles/Descripcion.css'
function Descripcion() {
    
    const tiempo='32'
    const semana='36'
  return (
    <div className='Descripcion'>
        <div className='actividad'>
        
        </div>
        <div className='tiempo'>
        <span>{`${tiempo}hrs`}</span>
        </div>
        <div className='semana'>
        <span>{`Last Week - ${semana}hrs`}</span>
        </div>
    </div>
  )
}

export { Descripcion }
