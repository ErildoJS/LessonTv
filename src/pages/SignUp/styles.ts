import styled from 'styled-components'
import {shade} from 'polished'
import Proff from '../../assets/Proffy.png'


export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch; /** faz com que o Content e o Background ocupam tambem 100vh */

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    place-content: center; /**{/** e o mesmo que align-items e justify-content */
    width: 100%;
    max-width: 700px;

    p {
        position: absolute;
        left: 180px;
        top: 47px;
    }

    

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;


        h1 {
        position: absolute;
        left: 180px;
        top: 90px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 34px;
        color: #32264D;
    }

    p {
        position: absolute;
        left: 180px;
        top: 100px;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #6A6180;
        text-align: left;
        margin: 21px 0 40px 0;
        
    }

        a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#f4ede8')}
            }
        }
    }
`

export const Background = styled.div`
    flex: 1;
    background-color: #8257E5;
    background: url(${Proff});
    background-size: cover;
`