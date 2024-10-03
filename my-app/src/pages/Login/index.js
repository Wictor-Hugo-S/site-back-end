
import { Input } from '../../components/Inputs'
import './style.css'
import logo from '../../images/logo.png'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
export default function Login() {
    return (
        <>

        <Header></Header>
            <div class=' container-login'>

                <div class='box-login'>
                    <div class='title-login'>
                        <h1>Seja Bem Vindo</h1>
                    </div>
                   
                    {/* <div class='logo-login'>
                        <div class='cpf-input'>
                            <div class='icon-cpf'></div>
                            <div class='cpf-login'>
                                <input type="text" className="input-field" placeholder="Digite algo..." />
                            </div>
                        </div>
                    </div>
                    <div class='button-login'>
                    <button>Entrar</button> */}

                   <div className='logo-login'>
                    <img src={logo}></img>
                   </div>

                   <div className='subtitle-login'>
                        <span>Faça o login para continuar</span>
                   </div>
                        <Input />
                    
                </div>
            </div>

            <Footer/>
        </>
    )
}