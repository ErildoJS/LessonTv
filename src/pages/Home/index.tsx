import React from  'react'
import {FiPower, FiHeart, FiBookOpen} from 'react-icons/fi'
import {Container, Content, Header, Logo, LogoTwo, Main, MainTex, Buttonn, ButtonnTwo} from './styles'
import logo from '../../assets/Intro.png'
import llustra from '../../assets/Ilustra.png'

const Signin: React.FC = () => {
    return (
    <Container>
        <Content>
            <Header>
                <img src="https://avatars0.githubusercontent.com/u/52578096?s=460&u=d233e09f38650572379a534f8fa22788e4aa42bf&v=4" alt="name"/>
                <p>ErildoJS</p>
                <a href="/profile">
                    <FiPower />
                </a>
            </Header>

            <Logo>
                <img src={logo} alt="logo"/>
            </Logo>
            <LogoTwo>
                <img src={llustra} alt="llustra"/>  
            </LogoTwo>

            <Main>
                <p>Seja bem vindo <br /><a href="/">O que deseja fazer?</a></p>
            </Main>

            <MainTex>

            <p>Total de 200 conxoes ja realizadas<FiHeart size={15} color="#9C98A6"/></p>
            </MainTex>

            <Buttonn>
                <FiBookOpen size={15} color="#FFF"/>
                Estudar
            </Buttonn>

            <ButtonnTwo>
                Dar aulas
            </ButtonnTwo>
        </Content>

    </Container>
)
}
export default Signin