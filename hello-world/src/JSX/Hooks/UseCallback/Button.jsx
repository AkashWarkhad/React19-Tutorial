import React from 'react'

function Button({handleClick, children}) 
{
    console.log("Rendering Button ", handleClick)
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Button);