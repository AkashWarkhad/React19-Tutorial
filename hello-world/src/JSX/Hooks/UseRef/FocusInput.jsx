import React, {useEffect, useRef} from 'react'

function FocusInput() 
{
    const inputRef = useRef(null);
    
    useEffect(()=> 
    {
        // Focus the input element
        inputRef.current.focus()
    }, []);

    return (
        <div>
            <p ref={inputRef}>Hi this is useRef</p>
            <input ref={inputRef} type= "text"></input>
        </div>
    )
}

export default FocusInput