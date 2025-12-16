// INSTALL AXIOS TO FETCH DATA 
// CMD : npm install axios

import React, {useState, useEffect} from 'react'
import axios from "axios"

function FetchingData() 
{
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});
  const [idFromBtn, setIdFromBtn] = useState(1);


  useEffect(() => {
    // Get All Posts
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then(res =>{ 
    //   console.log(res)
    //   setPosts(res.data)
    // })
    // .catch(err => console.log(err));

    // Get Post by id
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
    .then(res =>{ 
      console.log(res)
      setPost(res.data)
    })
    .catch(err => console.log(err));

  }, [idFromBtn])

  const handleClick = () => 
  {
    setIdFromBtn(id);
  }

  return (
    <>
      <div>Fetch Post Data:</div>
      <input type='int' value={id} onChange={(e) => setId(e.target.value)}></input>
      <button type='button' onClick={handleClick}>Fetch Post</button>
      <ol>

        {/* {
          posts.map((post) => (
            <li key={post.id}>{post.userId}-{post.title}</li>
        ))} */}

        {post.id}- {post.title}

      </ol>
    </>
  )
}

export default FetchingData