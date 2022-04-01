import * as C from './styles';
import { Item } from '../../types/item';

type Props = {
    item: Item
    onChange: (done: boolean, id: number ) => void
}

export const ListItem = ({ item, onChange }: Props) => {


    return(
        <C.Container done={item.done} >
            {
                item.done
                ?
                <span>&#128077;</span>
                :
                <span>&#128073;</span>
            }
            
            <input 
                type='checkbox' 
                checked={item.done}
                onChange={e => onChange(e.target.checked, item.id)}
            />
            <label>{item.name}</label>
        </C.Container>
    )
}