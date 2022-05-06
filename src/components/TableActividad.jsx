import React from 'react'
import { CabeceraActividad } from './CabeceraActividad'
import '../styles/TableActividad.css'
function TableActividad() {
  return (
      <div>
        <div className='table-actividades'>
            <CabeceraActividad title='Works'/>
            <CabeceraActividad title='Pay'/>
            <CabeceraActividad title='Study'/>
            <CabeceraActividad title='Exercise'/>
            <CabeceraActividad title='Social'/>
            <CabeceraActividad title='Soft Care'/>
        </div>
      </div>

  )
}

export {TableActividad}