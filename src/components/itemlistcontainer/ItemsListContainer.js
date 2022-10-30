import React from 'react'
import './ItemsListContainer.css'

const ItemsListContainer = (props) => {
    console.log(props)
  return (
    <div className='mensaje-bienvenida-container'>
        <h2 className='mensaje'>{props.name}</h2>
        <h2 className='mensaje'>{props.info}</h2>
    </div>
  )
}

export default ItemsListContainer