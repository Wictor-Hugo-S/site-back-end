
import { Link, NavLink, useNavigate } from 'react-router-dom'

import Fade from 'react-reveal/Fade';

import { FaWhatsapp } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdOutlinePayments } from 'react-icons/md'


import handleClick from '../../uteis/funcaoWpp';
import listaContatos from './listaContato'
import './style.css'
import logo from '../../images/logo.png'
import handleAreaCliente from '../../uteis/funcaoHandleCliente';




const Contato = () => {
    const listaContato1 = listaContatos.filter((array => array.id <= 4))
    const listaContato2 = listaContatos[4].filter((array => array.id > 3))


    
    // const handleAreaCliente = () => {
    //     // const url = 'https://systec.sistectelecom.com.br/'
    //     // window.open(url, 'blank')
    //     window.open('/login', '_blank');
    // }




    return (
        <>
            <div className='contato'>
                <div className="container-contato">

                    <div className="wrapper-contato">

                        <div className="logo-contato">

                            <a href="/">
                                <Fade >
                                    <img src={logo} alt="Logo" />
                                </Fade>
                            </a>



                        </div>

                        <div className="lista-contatos">
                            <Fade >
                                <ul>
                                    {
                                        listaContato1.map((item, index) => {

                                            return (
                                                <>
                                                    <li key={index}> <NavLink to={`${item.link}`}>{item.nome}</NavLink></li>
                                                </>
                                            )
                                        })

                                    }
                                </ul>

                                <ul>
                                    {
                                        listaContato2.map((item, index) => {

                                            return (
                                                <>
                                                    <li key={index}> <a href={item.link} target='blank'>{item.nome}</a></li>
                                                </>
                                            )
                                        })

                                    }
                                </ul>
                            </Fade>
                        </div>
                        <div className='teste-botao'>
                            <div className="button-contato">



                                <Fade >
                                 <button onClick={handleAreaCliente} ><MdOutlinePayments /> 2 Via do boleto</button>
                                    <button onClick={handleAreaCliente}><BsFillPeopleFill /> Área do cliente</button>
                                    <button onClick={() => handleClick('Olá! Gostaria de saber mais informações sobre sua empresa')}><FaWhatsapp /> Fale no whatsapp</button>
                                </Fade>





                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )

}



export default Contato