import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import {MdKeyboardBackspace} from 'react-icons/md'

import Input from '../../components/Input'
import Button from '../../components/Button'

import {Container, Content, Background} from './styles'

const SignUp: React.FC = () => {

    function handleSubmit() {
        return <Redirect to="/concluir/"/>
    }
    return (
        <Container>
        <Content>
            <Link to="/">
                <p><MdKeyboardBackspace size={16} color="#8257E5"/></p>
            </Link>

            <form >
                <h1>Cadastro</h1>

                <p>Preencha os dados abaixo<br /> para começar</p>

                <Input name="name"  placeholder="Nome"/>
                <Input name="sobrenome"  placeholder="Sobrenome"/>
                <Input name="email" placeholder="E-mail"/>
                <Input name="password" type="password" placeholder="Senha"/>

                <Button type="button" 
                onClick={handleSubmit}
                style={{background: '#04D361', color: '#FFF'}}
                >Concluir cadastro</Button>
            </form>

            <Link to="/">
                Voltar Para logon
            </Link>
        </Content>
        <Background />
    </Container>
    )
}

export default SignUp