import React from 'react'

import Button from '../../components/Button'

import {Container} from './styles'
import { Redirect } from 'react-router-dom'

const Concluir: React.FC = () => {
    function handleSubmit() {
        return <Redirect to="/"/>
    }    
    return (
        <Container>
            <Button type="submit" 
            onClick={handleSubmit}
            style={{background: '#04D361', color: '#FFF', borderRadius: 8}}
            ></Button>
    </Container>
    )
}

export default Concluir