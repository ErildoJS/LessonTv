import React from  'react'
import {FiHeart} from 'react-icons/fi'
import {Container, Content, Background, ContainerText, Text} from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'


const Signin: React.FC = () => {
    return (
    <Container>
        <Background />
        <Content>
            <form>
                <h1>Fazer login</h1>

                <Input name="email" placeholder="E-mail"/>
                <Input name="password" type="password" placeholder="Senha"/>
                
                <ContainerText>
                <h2>lembrar-me</h2>
                <a href="forgot">Esquce minha senha</a>
                </ContainerText>
                
                <Button type="submit">Entrar</Button>

            </form>

            <Text>
            <h2>Naõ tem conta?</h2>
            <a href="login">
                Cadastre-se
            </a>
            <h3>
                é de graça < FiHeart size={20} color="#000"/>
            </h3>

            </Text>
        </Content>

    </Container>
)
}
export default Signin