import React from "react";

// Hello with JSX
export const Hello = () => 
{
    return (
    <div id="container">
        <h1>Hello Akash</h1>
    </div> );
}

// Hello without JSX

export const HelloWithoutJSX = ()=> 
{
    return(
        React.createElement("div",
            { id : "container" },
            React.createElement("h1", null, "Hello without JSX Akash"))
    );
}