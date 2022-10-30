import React from 'react'
import './Navbar.css'
import logo_final from '../../assets/imagenes/logo_final.png'
import Cartwidgets from '../CartWidget/Cartwidgets'


const Navbar = () => {
    return (
        
        <div className='menu-navbar-container' >
            <img className='menu-imagen' src={logo_final} alt="cart widget"/>
            <h1 className='menu-title'>COMIX</h1>
            <h2 className='menu-title2'>BETA PERFORMANCE REACT</h2>
            <ul className='menu-items'>
                <li>
                    <a href='' className='menu-list'>Categorias</a>
                </li>

                <li>
                    <a href='' className='menu-list'>Buscar</a>
                </li>
                <li>
                    <a href='' className='menu-list'>Mis Pedidos</a>
                </li>


            </ul>

            <Cartwidgets />

        </div>
    )
}

export default Navbar