import React, { useState } from 'react'
import useDocumentTitleHook from './useDocumentTitleHook';

function DocTitle1() 
{
    const [count , setCount] = useState(0);

    // useEffect(()=> 
    // {
    //     document.title = "Title " + count
    // }, [count]);

    // Custom document hook
    useDocumentTitleHook(count);
    
    return (
        <div>
            <p>useDocumentTitle custom hook Created From useEffect</p>
            <button onClick={()=> setCount(count + 1)}>Count : {count}</button>
        </div>
    )
}

export default DocTitle1