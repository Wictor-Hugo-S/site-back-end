
import Maps from "../../components/Maps";




import Flash from 'react-reveal/Flash';
import Fade from 'react-reveal/Fade';


import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import ButtonWhats from "../../components/ButtonWhats";
import ImagemCapa2 from "../../components/ImagemCapa2";
import endereco from "./endereco";
import iconObjects from "./iconObjetos";
import atendimento from '../../images/atendimento.jpg'

import './style.css'



export default function Atedimento() {
    const imagem_fundo = atendimento


    return (
        <>


      
            <section className="header-atendimento">
                <Header />

                <ImagemCapa2 name='Atendimento' img={imagem_fundo} />
                <ButtonWhats />
            </section>

            <div className="midia-sociais">
                <div className="container-midia-sociais">
                    <div className="wrapper-midia-sociais">
                        <Flash>
                            <div className="title-midia-sociais">
                                <h1> Fale</h1>
                                <span>Conosco</span>
                            </div>
                        </Flash>
                        <Fade>
                            <div className="icons-midia-sociais">
                                {iconObjects.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className="box-midia-sociais">
                                                <a href={item.link} target="blank">{item.icon}</a>
                                            </div>
                                        </>
                                    )
                                })}


                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            <section className="nossa-localizacao">
                <div className="container-nossa-localizacao">
                    <Flash>
                        <div className="title-nossa-localizacao">
                            <h1>NOSSA</h1>
                            <h1>LOCALIZAÇÃO</h1>
                        </div>
                    </Flash>

                    <div className="wrapper-nossa-localizacao">
                        <Fade>
                            <div className="googles-maps">
                                <Maps />
                            </div>
                        </Fade>
                        <Fade>
                            <div className="boxes-wrapper-nossa-localizacao">

                                {endereco.map((item, index) => {

                                    return (
                                        <>
                                            <div key={index} className="boxes-nossa-localizacao">
                                                {item.icon}
                                                <h1>{item.title}</h1>

                                                <div className="descricao-nossa-localizacao">

                                                    <span>
                                                        {item.rua}
                                                        {item.diaSemana}
                                                    </span>


                                                    <span>
                                                        {item.localidade}
                                                        {item.horario1}
                                                        {item.bairro1}

                                                    </span>
                                                    <span>
                                                        {item.cep}
                                                        {item.finaldeSemana}
                                                        {item.bairro2}
                                                    </span>
                                                    <span>
                                                        {item.horarioReduzido}
                                                        {item.bairro3}
                                                    </span>

                                                </div>

                                            </div>
                                        </>
                                    )
                                })}

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