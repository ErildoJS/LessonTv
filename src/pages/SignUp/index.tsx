import React, {useCallback, useRef} from  'react'
//import {FiArrowLeft, FiMail, FiUser, FiLock} from 'react-icons/fi'

import Input from '../../components/Input'
import Button from '../../components/Button'

import {Container, Content, Background} from './styles'

const SignUp: React.FC = () => {
    
    return (
        <Container>
        <Background />

        <Content>
            <h1>Cadastre-se</h1>

            <form >
                <h1>Faca seu Cadastro</h1>

                <Input name="name"  placeholder="Nome"/>
                <Input name="email" placeholder="E-mail"/>
                <Input name="password" type="password" placeholder="Senha"/>

                <Button type="submit">Entrar</Button>
            </form>

            <a href="login">
                Voltar Para logon
            </a>
        </Content>
    </Container>
    )
}

export default SignUp