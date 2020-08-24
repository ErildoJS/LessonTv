import styled from 'styled-components'
import Proff from '../../assets/Proffy.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch; /** faz com que o Content e o Background ocupam tambem 100vh */

`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    flex-direction: column;
    /*place-content: center; /**{/** e o mesmo que align-items e justify-content */
    width: 100%;
    max-width: 700px;

    form {
        margin: 10px;
        width: 340px;
        text-align: center;

        h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 36px;
        color: #32264D;
        margin-bottom: 36px;
        text-align: left;
        }
    }
    
`

export const ContainerText = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;

        h2 {
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 24px;
            color: #9C98A6;
            padding-right: 0;
        }

        a {
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 24px;
            color: #9C98A6;
            text-decoration: none;
        }

`

export const Text = styled.div`
    h2 {
        position: absolute;
    width: 129px;
    height: 52px;
    left: 850px;
    top: 582px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;

    color: #6A6180;
    }
    
    a {
        position: absolute;
    width: 129px;
    height: 52px;
    left: 850px;
    top: 600px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;


    text-decoration-line: underline;


    color: #6A6180;
    }

    h3 {
        position: absolute;
    width: 100px;
    height: 20px;
    right: 150px;
    top: 590px;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #9C98A6;
    display: flex;
    }

    
`
export const Background = styled.div`
    flex: 1;
    background: url(${Proff});
    background-size: cover;

`