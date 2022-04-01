import { useState,KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskname: string) => void
}

export const AddArea = ({ onEnter}: Props) => {

    const [ text, setText ] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && text !== ''){
            onEnter(text);
            setText('');
        }
    }

    return(
        <C.Container>
            <div className='image'>&#10133;</div>
            <input 
                type='text'
                placeholder='Adicione uma tarefa'
                value={text}
                onChange={e => setText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}