import Image1 from '../../images/image-1.jpg'
import conectividade from '../../images/conectividade.png'
import Menu from '../Menu';

import Rotate from 'react-reveal/Rotate'

import './style.css'
import Carrosel from '../Carrosel';
const ImageFundo = () => {
    return (
        <>
               
            <section className="wrapper-capa">
                <div className='imagem-fundo'>
                   
                        <Carrosel />
                </div>
               
                <div className='menu'>
                    <Menu></Menu>

                </div>

                
            </section>
           




        </>
    )

}













export default ImageFundo;