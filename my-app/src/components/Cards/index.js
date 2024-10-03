import { useState } from 'react';



import { FaWhatsapp } from 'react-icons/fa'





import Flash from 'react-reveal/Flash';
import Fade from 'react-reveal/Fade';


import arrayCard from './arrayCard';
import './style.css'

const Cards = () => {
    const [message, setMessage] = useState('')
    const phoneNumber = '5581987079886'

    const handleClick = (index) => {

        const novoArrayCard = arrayCard.map((item, indice) => {
            if (index === indice) {

                const message = `Olá, me interessei pelo seu plano de ${item.plano} como faço para adquiri-ló ?`
                const encodedMessage = encodeURIComponent(message);
                const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                window.open(url, '_blank');

            }
            else {
                setMessage('')
            }




        })


    }



    return (



        <>


            <section className='cards-valores'>

                <div className='title-cards'>

                    <div className='wrapper-title-cards'>
                        <Flash>
                            <h1>Nossos</h1>
                            <span>Planos</span>
                        </Flash>
                    </div>

                </div>


                <div className='container-cards'>

                    <div className='flex-box'>


                        {arrayCard.map((array, index) => {
                            if (Object.keys(array).length === 0) {
                                return null
                            }
                            return (
                                <>
                                    <Fade >

                                        <div key={index} className='boxes'>
                                            <div className="teste">
                                                <div className='titile-boxes'>
                                                    <span>{array.titleMega}</span>
                                                    <div className='border-botton-titles-box'></div>
                                                    <span>MEGA</span>

                                                </div>
                                            </div>


                                            <div className="boxes-precos">

                                                <div className="preco">

                                                    <div className="wrapper-preco">
                                                        <span>R$</span>
                                                        <p>{array.preco}</p>
                                                        <div className="valores ">
                                                            <span>,{array.centavos}</span>
                                                            <span>/mês</span>
                                                        </div>
                                                    </div>

                                                    <div className="descricao-preco">
                                                        <div className='wrapper-descricao'>
                                                            <div className='boxes-itens'>
                                                                {array.iconTiltleFibra !== null ? array.iconTiltleFibra : null}
                                                                {array.titleFibra !== null ? <span>{array.titleFibra}</span> : null}



                                                            </div>

                                                            <div className='border-botton'></div>

                                                            <div className='boxes-itens'>
                                                                {array.iconWifi !== null ? array.iconWifi : null}
                                                                {array.titleWifi !== null ? <span>{array.titleWifi}</span> : null}

                                                            </div>
                                                            <div className='border-botton'></div>

                                                            <div className='boxes-itens'>
                                                                {array.iconSuporte !== null ? array.iconSuporte : null}
                                                                {array.titleSuporte !== null ? <span>{array.titleSuporte}</span> : null}

                                                            </div>

                                                            <div className='border-botton'></div>

                                                            <div className='boxes-itens'>
                                                                {array.icontitleInstalaçãoImediata !== null ? array.icontitleInstalaçãoImediata : null}
                                                                {array.titleInstalacaImediata !== null ? <span>{array.titleInstalacaImediata}</span> : null}

                                                            </div>

                                                            <div className='border-botton'></div>

                                                            <div className='boxes-itens'>
                                                                {array.iconInstacao !== null ? array.iconInstacao : null}
                                                                {array.titleInstalacao !== null ? <span>{array.titleInstalacao}</span> : null}

                                                            </div>
                                                            <div className={array.isActive ? 'border-botton' : null}></div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                            <div className='button-card'>
                                                <button onClick={() => handleClick(index)} >
                                                    <div className='icon-buton-card'>
                                                        <FaWhatsapp></FaWhatsapp>

                                                        Contratar
                                                    </div>
                                                </button>
                                            </div>

                                        </div>

                                    </Fade>
                                </>
                            )
                        })}


                    </div>

                </div>
            </section >







        </>
    )

}



export default Cards;