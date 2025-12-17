import useInputHook from './useInputHook';

function UserForm() 
{
    //const [firstName, setFirstName] = useState("");
    //const [lastName, setLastName] = useState("");

    const [firstName, bindFirstName, resetFirstName] = useInputHook('');
    const [lastName, bindLastName, resetLastName] = useInputHook('');

    const SubmitHandler = (e) => 
    {
        e.preventDefault()
        alert(`Hi ${firstName} ${lastName}`)

        // Added reset
        resetFirstName() 
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <div>
                    <label>FirstName :  </label>
                    <input type='text' placeholder='Enter firstName ..'
                    // onChange = {e => { setFirstName(e.target.value)}} 
                    {...bindFirstName} 
                    />
                </div>

                <div>
                    <label>LastName :  </label>
                    <input type='text' placeholder='Enter lastName ..'
                    // onChange={e => { setLastName(e.target.value)}} 
                    {...bindLastName}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm