import { useState } from "react";

export const UseStateWithObject = () => {

    const [user, setUser] = useState(
    {
        name: "Akash",
        age: 30,
        email: "akash.warkhad@gmail.com"
    });

    console.log("Component rendering user: ", user);

    const ChangeName = () => 
    {
        setUser({
            ...user, // this is used to map other data as we just want to change the name.
            name: "Shubham"
        })
    }

    const UpdateAge = () => 
    {
        setUser({
            ...user,
            age: user.age + 1
        });
    }

    const UpdateNameAndEmail = () => {
        setUser({
            ...user,
            email: "contact.us@company.com"
        });
    }

    return(
        <div>
            <h3>{user.name}</h3>
            <p>Age : {user.age}</p>
            <p>Email : {user.email}</p>
            <button onClick={ChangeName}>Change the user name to Shubham.</button>
            <button onClick={UpdateAge}>Increase Age by 1</button>
            <button onClick={UpdateNameAndEmail}>Update Email</button>
            <p>Json Format : {JSON.stringify(user)}</p>
        </div>
    )
}