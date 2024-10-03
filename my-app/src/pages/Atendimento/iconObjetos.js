


import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { BsTelephoneFill } from "react-icons/bs";


import handleClick from "../../uteis/funcaoWpp";


const iconObjects = [
    {
        icon: <FaWhatsapp onClick={() => handleClick('Olá! Gostaria de saber mais informações')} />
    },
    {
        icon: <BsTelephoneFill />,
        telefone: '81987079886'
    },
    {

        icon: <FaFacebook />,
        link: 'https://www.facebook.com/profile.php?id=100065397073058&mibextid=LQQJ4d'

    },
    {
        icon: <FaInstagram />,
        link: 'https://instagram.com/systec_fibra?igshid=OGQ5ZDc2ODk2ZA=='

    },

]

export default iconObjects