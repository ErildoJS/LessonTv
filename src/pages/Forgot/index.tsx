import React from  'react'
import {Container, Content, Background} from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'


const Forgot: React.FC = () => {
    return (
    <Container>
        <Content>
            <form>
                <h1>Eita, esqueceu sua senha</h1>
                <p>Não esquenta, vamos dar um jeito nisso.</p>

                <Input name="email" placeholder="E-mail"/>
                                
                <Button type="submit">Enviar</Button>

            </form>
        </Content>
        <Background />
    </Container>
)
}
export default Forgot