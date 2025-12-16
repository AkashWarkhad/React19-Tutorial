import { useState } from "react";

export const UseStateWithArrayCollection = () =>
{
    const [items, setItems] = useState(
        [
            { id: 1, text: "Learn React", done: false},
            { id: 2, text: "Implement Projects", done: true}
        ]);

    console.log("Rendering with items: ", items);

    const AddItem = () => 
    {
        let newItem = 
        {
            id: Date.now(),
            text: "New updated",
            done: false
        };

        //setItems([...items, newItem]);
        setItems(items.concat(newItem));
    }

    const toggleDone = (id)=> 
    {
        setItems(items.map((item)=> {
            if(item.id === id)
            {
                return {
                    ...item,
                    done: !item.done
                };
            }
            return item;
        }))
    }

    const RemoveItem = (removeId) => 
    {
        setItems(items.filter((item) => item.id !== removeId));
    }

    return (
        <div>
            <ul>
                {
                    items.map((item) =>
                    {
                        return (
                        <li key = {item.id}>

                            <span style= {{ textDecoration: item.done ? "line-through": "none"}}>
                                {item.id}--{item.text}
                            </span> <br></br>

                            <button onClick= {()=> {toggleDone(item.id)}}> {item.done ? "Undo" : "Done"} </button>

                            <button onClick={()=> {RemoveItem(item.id)}}> Delete </button>
                        </li>);
                    })
                }
            </ul>

            <button onClick={AddItem}>Add Item</button>
        </div>
    );
}