import React, { useState, useEffect } from "react";

import { NavLink } from 'react-router-dom';



import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Fade from 'react-reveal/Fade';

import handleClick from '../../uteis/funcaoWpp';
import logo from '../../images/logo.png'
import listaMenu from "./listaMenu";
import './style.css'




const Menu = () => {

    const [handleMenu, setHandleMenu] = useState(false)
    const [isOpen, setIsOpen] = useState(true)

    const [resize, setResize] = useState(false)
    const [tamanho, setTamanho] = useState({ windowWidth: window.innerWidth })

    const handleResize = (e) => {
        setTamanho({ windowWidth: window.innerWidth })
    }

    useEffect(() => {


        window.addEventListener('resize', handleResize)

    }, [])


    useEffect(() => {
        if (tamanho.windowWidth >= 768 && handleMenu === true) {

            setHandleMenu(false)
            setResize(true)
        }


    }, [tamanho])


    function openMenu() {

        setHandleMenu(!handleMenu)
        setIsOpen(!isOpen)

    }

    const [menuState, setMenuState] = useState(listaMenu)


   

    return (
        <>


            <nav className='menu'>

                <div className='container'>

                    <div className='logo-menu'>
                        <a href="/">
                            <Fade right>
                                <img src={logo} alt="Logo" />
                            </Fade>
                        </a>
                    </div>


                    <div className='links '>
                        {listaMenu.map((item, index) => {
                            return (
                                <>
                                    <Fade left>
                                        <div >
                                            <NavLink key={index} className='links' to={item.href} activeClassName="active">{item.nome}</NavLink>

                                        </div>
                                    </Fade>
                                </>
                            )
                        })}

                    </div>

                    <div className='button-assine'>
                        <button onClick={()=>handleClick('Olá! Me interessei pela sua empresa como faço?')}>Assine Já</button>
                    </div>

                    <div className='menu-mobile'>
                        <Fade left>
                            {handleMenu ?
                                <AiOutlineCloseCircle className='icon-close' fill='#FFF' size={40}
                                    onClick={openMenu} />
                                : <GiHamburgerMenu className='icon-menu-navegacao' fill='red' size={40}
                                    onClick={openMenu} />}

                        </Fade >

                    </div>


                </div>

            </nav>
            <div className='container-menu-mobile'>


                {handleMenu && (
                    <>
                        <div className='wrapper-menu-mobile '>
                            {listaMenu.map((item, index) => {
                                return (
                                    <>
                                        <Fade left>
                                            <div  className='links-mobile'>
                                                <NavLink key={index} className='links-mobile' to={item.href} activeClassName="active">{item.nome}</NavLink>

                                            </div>
                                        </Fade>
                                    </>
                                )
                            })}



                        </div>
                    </>
                )}

            </div>

        </>
    )
}

export default Menu

