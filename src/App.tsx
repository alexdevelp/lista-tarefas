import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { AddArea } from './components/AddArea';
import { ListItem } from './components/ListItem';

const App = () =>{

  const initialItem = [
    {
      id: 1,
      name: 'Hello Dev!',
      done: false,
    },
  ]

  const [ list, setList ] = useState<Item[]>(initialItem);

  const setDoneItem = (done: boolean , id: number) => {

    const newList = [...list];
    for(let i in newList){
      if(newList[i].id === id){
        newList[i].done = done;
      }
    }

    setList(newList);
  }

  const handleAddItem = (taskName: string ) => {

    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });

    setList(newList);
  }


  return(
    <C.Container>
      <C.Area>
        <C.Header>&#128210; Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddItem} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={setDoneItem} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;