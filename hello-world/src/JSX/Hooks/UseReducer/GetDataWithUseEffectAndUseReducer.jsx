import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState = 
{
    loading : false,
    error: "",
    post: {}
}

const reducer = (state, action) => 
{
    switch(action.type){
        case "Success" :
            return {
                loading : false,
                post: action.payload,
                error: ""
            }
        case "Failure" :
            return {
                loading : false,
                post: {},
                error: action.error
            }
        
        default:
            return initialState;
    }
}

function GetDataWithUseEffectAndUseReducer() 
{
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=> 
    {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => dispatch({
            type: "Success",
            payload: response.data,
            error: null
        }))
        .catch((err) => dispatch({
            type: "Failure",
            payload: {},
            error : "Something went wrong !!" + err
        }))
    }, []);
    
    return (
        <div>
            <b>Get Data With UseEffect And UseReducer</b> <br></br>
            {state.loading ? "Loading" : `Response : ${state.post.userId}-${state.post.title}`}
            {state.error ? `Error : ${state.error}` : ""}
        </div>
    )
}

export default GetDataWithUseEffectAndUseReducer