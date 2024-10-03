
import { FaWhatsapp } from 'react-icons/fa'

import Flash from 'react-reveal/Flash'
import Fade from 'react-reveal/Fade';



import Header from "../../components/Header";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import ButtonWhats from "../../components/ButtonWhats";
import ImagemCapa2 from "../../components/ImagemCapa2";
import handleClick from "../../uteis/funcaoWpp";
import produtoSuaEmpresa from "./produtoSuaEmpresa";



import netempresarial from '../../images/netempresarial.png'
import parasuaempresafundo from '../../images/parasuaempresafundo.png'
import imageteste3 from '../../images/imageteste3.jpg'

import './style.css'

export default function SuaEmpresa() {
    const imagem_fundo = parasuaempresafundo

    return (
        <>

            <section className="header-sobrenos">
                <Header />

                <ImagemCapa2 name='Para sua empresa' img={imagem_fundo} />
                <ButtonWhats />
            </section>

            <section className="conteudo-sua-empresa">
                <div className="container-conteudo-sua-empresa">
                    <Flash>
                        <div className="title-conteudo-sua-empresa">
                            <h1>Internet</h1>
                            <span>Empresarial</span>
                        </div>
                    </Flash>
                    <div className="wrapper-conteudo-sua-empresa">
                        <Fade>
                            <div className="boxes-sua-empresa">

                                {produtoSuaEmpresa.map((item, index) => {
                                    return (
                                        <>

                                            <div key={index} className="box-conteudo-sua-empresa">
                                                <div className="icon-box-sua-empresa">
                                                    {item.icon}
                                                </div>
                                                <div className="title-box-sua-empresa">
                                                    <span>{item.title}</span>
                                                    <div className="description-box-sua-empresa">
                                                        <p>{item.descricao}</p>
                                                    </div>
                                                </div>


                                            </div>
                                        </>
                                    )
                                })}

                                <div className="button-especialista">
                                    <button onClick={() => handleClick('Olá! me interessei pelo plano empresarial da sua empresa como faço para adquiri-lá?')} >
                                        <FaWhatsapp />
                                        Falar com especialista</button>
                                </div>

                            </div>



                            <div className="imagem-conteudo-sua-empresa">
                                <img src={imageteste3}></img>
                            </div>
                        </Fade>
                    </div>
                </div>

            </section>

            <section className="contato">

                <Contato />
            </section>

            <Footer />
        </>
    )

}