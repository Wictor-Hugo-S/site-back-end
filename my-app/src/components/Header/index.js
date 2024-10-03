import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import Efeitos from '../Efeitos';
import Fade from 'react-reveal/Fade';
import './style.css'

import handleClick from "../../uteis/funcaoWpp";
import { NavLink } from "react-router-dom";
import handleAreaCliente from "../../uteis/funcaoHandleCliente";



const Header = () => {
    // const handleAreaCliente = () => {
    //     const url = 'https://systec.sistectelecom.com.br/'
    //     window.open(url, 'blank')
    // }

    const handleAtendimento=()=>{
        window.location.href='/atendimento'
    }

    return (
        <>

            <header className="cabecalho">

                <div className="container">
                    <Fade right>
                        <div className="texto-principal">

                            {/* <div className="text-icon"><FaWhatsapp></FaWhatsapp></div> */}
                            <button onClick={() => handleClick('Olá,gostaria de saber mais informações!')} >
                                <div className="texto-icon"> <FaWhatsapp />
                                </div>
                                Fale conosco pelo WhtasApp

                            </button>

                        </div>
                    </Fade>
                    <Fade left>
                        <div className="icon">

                            <div className="icon-whats">
                                <a> <FaWhatsapp onClick={() => handleClick('Olá,gostaria de saber mais informações!')} /></a>

                            </div>

                            <div className="icon-insta">
                                <a href='https://instagram.com/systec_fibra?igshid=OGQ5ZDc2ODk2ZA==' target="blank"> <FaInstagram /></a>
                            </div>
                            <div className="icon-face">
                                <a href="https://www.facebook.com/profile.php?id=100065397073058&mibextid=LQQJ4d" target="blank"><FaFacebook /></a>
                            </div>

                        </div>
                    </Fade>
                    <Fade left>
                        <div className="descricao-header">

                                <button onClick={handleAtendimento} > Atendimento</button>
                           
                           
                                <button onClick={handleAreaCliente}>Área Do cliente </button>
                           
                           
                                <button onClick={handleAreaCliente}>2 Via do Boleto</button>
                           
                        </div>
                    </Fade>

                </div>
            </header>



        </>

    )

}

export default Header;