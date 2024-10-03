import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Cards from "../../components/Cards";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";
import ButtonWhats from "../../components/ButtonWhats";
import ImagemCapa2 from "../../components/ImagemCapa2";

import parasuafamilia from '../../images/parasuafamilia.jpg'



export default function ParaVoce() {
    const imagem_fundo = parasuafamilia

    return (
        <>



            <section className="header-sobrenos">
                <Header />
                <ImagemCapa2 name='Para Você' img={imagem_fundo} />
                <ButtonWhats />
            </section>

            <section className="cards-paravoce">
                <Cards />
            </section>
            <section className="contato-paravoce">
                <Contato />
            </section >
          
            <ButtonWhats />
            <Footer />
        </>
    )

}