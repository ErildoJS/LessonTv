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
        margin-bottom: 26px;
        text-align: left;
        }

        p {
            width: 325px;
            
            margin: 20px 0;
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 26px;
            color: #6A6180;
            align-items: flex-start;

        }
    }
    
`
export const Background = styled.div`
    flex: 1;
    background: url(${Proff});
    background-size: cover;

`