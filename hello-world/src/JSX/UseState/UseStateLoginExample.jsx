import { useState } from "react";

export const UseStateLoginExample = () => 
{
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Now here set initial boolean value false
    const [message, setMessage] = useState("");
    
    const HandleLogin = () => 
    {
        setIsLoggedIn(!isLoggedIn);
    };

    const HandleChange = (event) => 
    {
        setMessage(event.target.value);
    }

    return (
        <>
            <button onClick={HandleLogin}> {isLoggedIn ? "Logout": "Login"}</button>
            <input 
                type="text" 
                placeholder="Type message" 
                value={message}
                onChange={HandleChange}/>
            <br></br>
            <p>Dynamic Data from input :{message}</p>
        </>
    );
};