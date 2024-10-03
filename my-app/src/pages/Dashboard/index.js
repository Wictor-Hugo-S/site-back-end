import menusLateral from './menusLateral'
import './style.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";

import logo from '../../images/logo.png'
import wct from '../../images/wct.jpg'
import { useState } from 'react';
import axios from 'axios';
export default function Dashboard() {

    const[arrow,setArrow]=useState(false)
    const navigate=useNavigate()

    const handleArrow=()=>{
        console.log(arrow)
        setArrow(!arrow)
        

    }

    const LogoutButton=()=>{
        // const history= useHistory()
      
       localStorage.removeItem('token')
       navigate('/login')
         
     
    }
    return (

        <>


            <div className='container-dashboard'>
                <div className='flex-dashboard'>

                    <div className='config-dashboard'>
                        <div className='box-dashboard'>
                            <div className='logo-dashboard'>
                                <img src={logo}></img>

                                <div className='title-dashboard'>
                                    <h1>Painel de controle</h1>
                                </div>
                            </div>



                            <div className='aside-dashboard'>

                                {menusLateral.map((item, index) => {
                                    return (
                                      
                                        <div> 
                                           
                                           <NavLink key={index} className='asides' to='' activeClassName="">{item.icon} {item.name}</NavLink>

                                           </div>

                                    )
                                })}
                            </div>
                            <div className='box-profile'>

                                <div className='profile'>
                                    <div className='foto-profile'>
                                        <img src={wct}></img>
                                    </div>
                                    <div className='title-profile'>
                                        <span>Wictor</span>
                                    </div>
                                </div>
                                <div className='seta-profile'>
                                    <IoMdArrowDropdown size={20} fill='#fb2f3f' onClick={handleArrow} />
                                    {arrow && <button onClick={LogoutButton} type='button'>Sair</button>}
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className='info-dashboard'>
                        <h1>Olá seja bem vindo Wictor</h1>
                    </div>

                </div>


            </div>


        </>
    )
}