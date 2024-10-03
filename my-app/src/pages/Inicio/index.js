
import { AiOutlineArrowRight } from 'react-icons/ai'

import Flash from 'react-reveal/Flash'
import Fade from 'react-reveal/Fade';

import Cards from "../../components/Cards"
import Contato from "../../components/Contato"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ImageFundo from "../../components/ImageFundo"
import ButtonWhats from "../../components/ButtonWhats";
import handleClick from "../../uteis/funcaoWpp";


import vantagensProdutos from "./vantagensProduto";
import './style.css'



export default function Inicio() {

    return (
        <div>
            <section className="header">
                <Header></Header>
                <ImageFundo></ImageFundo>
                <ButtonWhats />
            </section>


            <section className="cards">
                <Cards></Cards>

            </section>


            {/* <span style="-webkit-text-stroke-width: 2px;-webkit-text-stroke-color: #F27116; color: #fff;">VANTAGENS</span> */}

            <section className="produtos">

                <div className="container-produtos">
                    <div className="title-produtos">
                        <Flash>
                            <h1>VANTAGENS</h1>
                            <span>DE SER SEU PROVEDOR</span>
                        </Flash>
                    </div>

                    <div className="boxes-produtos">
                        <Fade  >
                            {vantagensProdutos.map((products,index) => {

                                return (
                                    <>


                                        <div key={index} className="wrapper-produtos">

                                            {products.icon}
                                            <span>{products.title1}</span>
                                            <span>{products.title2}</span>

                                        </div>
                                    </>
                                )
                            })}
                        </Fade >
                    </div>


                </div>

            </section>


            <section className="sua-empresa">

                <div className="container-sua-empresa">

                    <div className="title-sua-empresa">
                        <Fade >
                            <span>Para sua</span>
                            <h1>Empresa</h1>
                            <p>Contrate pelo plano ideal para acelerar seu negócio internet fibra óptica é na Systec.</p>
                        </Fade>
                    </div>
                    <Fade >
                        <div className="button-sua-empresa">

                            <button onClick={()=>{handleClick('Olá! Gostaria de saber mais sobre sua empresa!!!')}}>

                                Saiba Mais
                                <AiOutlineArrowRight
                                    className="icon-arrow-right" size={28} />

                            </button>
                        </div>
                    </Fade>
                </div>

            </section>


            <section className="contato">

                <Contato />
            </section>

            <footer className="footer">
                <Footer />
            </footer>




        </div >







    )

}