import React , {InputHTMLAttributes,  useRef,} from 'react'
import {Container} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {/** obtem todas as props de um input normal */
    name: string;

}

const Input: React.FC<InputProps> = ({name, ...rest}) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <Container>
            <input 
            ref={inputRef} 
            {...rest}/>
        </Container>
    )
}
export default Input