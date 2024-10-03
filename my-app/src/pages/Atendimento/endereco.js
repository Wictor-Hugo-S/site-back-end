
import { FaAddressBook } from "react-icons/fa";
import { FaHeadset } from 'react-icons/fa'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'

const endereco = [
    {
        icon: <FaAddressBook size={45} fill="#fb2f3f" />,
        title: 'Endereço',
        rua: 'Rua João Eugenio de Lima, 143',
        localidade: 'Boa Viagem - PE',
        cep: 'CEP: 51.030.360'

    },

    {
        icon: <FaHeadset size={45} fill="#fb2f3f" />,
        title: 'Horário de atendimento',
        diaSemana: ' Segunda à sexta :',
        horario1: '08:00 às 18:00',
        finaldeSemana: 'Sábado:',
        horarioReduzido: '08:00 às 18:00'

    },

    {
        icon: <BsFillRocketTakeoffFill size={45} fill="#fb2f3f" />,
        title: 'Bairros que atuamos',
        bairro1: 'Aguazinha',
        bairro2: 'Sapucaia',
        bairro3: 'Jardim-Brasil V'
    }



]

export default endereco