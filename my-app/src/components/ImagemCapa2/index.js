import Menu from '../Menu/'

import './style.css'


import Flash from 'react-reveal/Flash'

import Fade from 'react-reveal/Fade';

import image3 from '../../images/image-3.jpg'

const ImagemCapa2 = ({ name, img }) => {


    //   const estiloDiv = {
    //    backgroundImage: url('../../images/image-3.jpg'),
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     position:'absolute',
    //     backgroundAttachment: 'fixed'

    //   };
    return (
        <>

            <nav className='menu'>
                <Menu />
            </nav>
            <Fade>
                <section className='imagem-fundo-paginas'>
                    <img src={img}></img>


                    <div className='wrapper-imagem-fundo-paginas'>


                        <div className='imagem-capa-fundo-title'>

                            <h1>{name}</h1>

                        </div>
                    </div>
                </section>
            </Fade>


        </>
    )
}
export default ImagemCapa2