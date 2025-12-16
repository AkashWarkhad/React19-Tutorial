import React, { useState, useEffect} from 'react'
import axios from 'axios'

function GetDataWithUseEffectAndUseState() 
{
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState();
    const [post, setPost] = useState({});

    useEffect(()=> 
    {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            setLoading(false);
            setError("");
            setPost(response.data);
        })
        .catch((err) => {
            setLoading(false);
            setError("Something went wrong!!", err);
            setPost({});
        })
    }, []);

    return (
        <div>
            <b>Get Data With UseEffect And UseState</b> <br></br>
            {loading ? "Loading" : `Response : ${post.userId}-${post.title}`}
            {error ? `Error : ${error}` : ""}
        </div>
    )
}

export default GetDataWithUseEffectAndUseState