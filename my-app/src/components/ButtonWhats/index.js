import ReactWhatsapp from 'react-whatsapp';
import './style.css'
import { FaWhatsapp } from 'react-icons/fa'
import handleClick from '../../uteis/funcaoWpp';





const ButtonWhats = () => {

    
return(
<>

            <div className='container-button-whats'>
                <div className='teste-whats'>
                    <div className='box-button'>

                        <FaWhatsapp onClick={()=>handleClick('Olá,gostaria de saber mais informações!')} 


                            className='icon-button-whats' fill="#fff"
                        />
                    
                    </div>
                </div>

            </div>
        </>
    )
}

export default ButtonWhats