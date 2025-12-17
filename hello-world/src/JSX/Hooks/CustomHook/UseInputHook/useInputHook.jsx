import {useState} from 'react'

function useInputHook(initialValue) 
{
    const [value, setvalue] = useState(initialValue);

    const Reset = () => 
    {
        setvalue(initialValue);
    }

    const bind = 
    {
        value,
        onChange: e => 
        {
            setvalue(e.target.value)
        }
    }
    
    return [value, bind, Reset];
}

export default useInputHook