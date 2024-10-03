
import InputMask from 'react-input-mask';
import './style.css'

import { FaKey } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io"
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



export function Input() {
    const[cpf, setCpf]=useState('')
    const[senha,setSenha]=useState('')
    const [err,setErr]=useState('')
    const navigate = useNavigate();


    const handleSubmit= async (e)=> {
        e.preventDefault()
        console.log(cpf,senha)

        try{
           
            const response = await axios.post('http://localhost:5000/auth/login', {
                cpf,
                senha
              });
              console.log(response)

              if(response.data.auth){
                localStorage.setItem('token',response.data.token)
                console.log('login bem sucedido')
                navigate('/dashboard')
               
              }
              console.log('fsafafa',response.data);
        }
        catch(err){
            setErr('Erro ao fazer login')
            console.log(err)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='container-input'>

                    <div >

                        <div className='label-teste'>
                            <label htmlFor='cpf'>CPF:</label>
                        </div>
                        <div className='box-inputs'>
                            <div className='icon-cpf'>
                                <IoMdPeople size={30} fill='white' />
                            </div>

                            <div className='input-teste'>
                                <InputMask
                                    mask="999.999.999-99"
                                    placeholder='Digite seu CPF'
                                    id="cpf"
                                    value={cpf}
                                    onChange={(e)=>setCpf(e.target.value)}
                                    required>

                                    {(inputProps) => <input{...inputProps} className='input-field' ></input>}
                                </InputMask>
                            </div>
                        </div>
                    </div>




                    <div className=''>
                        <div className='label-teste'>
                            <label htmlFor="senha"> Senha:</label>
                        </div>

                        <div className='box-inputs'>


                            <div className='icon-senha'>
                                <FaKey size={30} fill='white' />

                            </div>

                            <div className='input-teste'>
                                <input
                                    type="password"
                                    id='senha'
                                    placeholder='Digite sua senha'
                                    className='input-field'
                                    value={senha}
                                    onChange={(e)=>setSenha(e.target.value)}
                                    required>
                                </input>
                            </div>
                        </div>

                    </div>
                    <button className='login-button' type="submit">Entrar</button>
                </div>
            </form>

        </>
    )
}