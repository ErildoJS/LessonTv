import React from  'react'
import {Link} from 'react-router-dom'
import {FiHeart} from 'react-icons/fi'
import {Container, Content, Background, ContainerText, Text} from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'


const SignIn: React.FC = () => {
    return (
    <Container>
        <Background />
        <Content>
            <form>
                <h1>Fazer login</h1>

                <Input name="email" placeholder="E-mail"/>
                <Input name="password" type="password" placeholder="Senha"/>
                
                <ContainerText>
                    
                    <input type="checkbox"/>
                    <h2>lembrar-me</h2>
                    <Link to="/forgot">Esquce minha senha</Link>
                </ContainerText>
                
                <Button type="submit">Entrar</Button>
            </form>

            <Text>
            <h2>Naõ tem conta?</h2>
            <Link to="/register">
                Cadastre-se
            </Link>
            <h3>
                é de graça < FiHeart size={14} style={{marginLeft: 8}} color="#8257E5"/>
            </h3>

            </Text>
        </Content>

    </Container>
)
}
export default SignIn