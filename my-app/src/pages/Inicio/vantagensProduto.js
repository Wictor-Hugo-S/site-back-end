
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import { BsClockHistory } from 'react-icons/bs'
import { AiOutlineWifi } from "react-icons/ai"
import { FaHeadset, FaPiggyBank } from 'react-icons/fa'
import { RiGamepadLine } from 'react-icons/ri'





const image = [
    <BsClockHistory fill="#fb2f3f" size={35} />,
    <FaPiggyBank fill="#fb2f3f" size={35} />,
    <AiOutlineWifi fill="#fb2f3f" size={35} />,
    <BsFillRocketTakeoffFill fill="#fb2f3f" size={35} />,
    <FaHeadset fill="#fb2f3f" size={35} />,
    <RiGamepadLine fill="#fb2f3f" size={35} />

]





const vantagensProdutos = [

    {
        id: 0,
        icon: image[0],
        title1: 'Instalação',
        title2: 'imediata'

    },
    {
        id: 1,
        icon: image[1],
        title1: 'Custo',
        title2: 'benefício'

    },
    {
        id: 2,
        icon: image[2],
        title1: 'Wifi',
        title2: 'grátis'

    },
    {
        id: 3,
        icon: image[3],
        title1: '100%',
        title2: 'Fibra óptica'

    },
    {
        id: 4,
        icon: image[4],
        title1: 'Atendimento',
        title2: 'especializado'

    },
    {
        id: 5,
        icon: image[5],
        title1: 'Otimizada',
        title2: 'para games'

    }

]

export default vantagensProdutos