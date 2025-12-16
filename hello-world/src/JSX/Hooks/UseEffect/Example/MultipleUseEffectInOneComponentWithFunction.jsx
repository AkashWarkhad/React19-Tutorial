// Dummy Example
import React, {useState, useEffect} from 'react'

function MultipleUseEffectInOneComponentWithFunction() 
{
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // 1️⃣ Fetch data (runs once)
  useEffect(() => {
    fetch('api/users')
    .then(res =>  res.json())
    .then(data => setUsers(data))
  }, []);

  // 2️⃣ Filter users when search changes
  useEffect(()=>{
    console.log("Filter Users :", search);
  }, [search]);

  // 3️⃣ Update document title
  useEffect(() => 
  {
    document.title = `users Count : ${users.length}`  
  }, [users]);


  return (
    <div>
      <input
      placeholder='Search user'
      onChange={e => setSearch(e.target.value)}>
      </input>

      <ul>
        {users.map((u) => {
          <li key={u.id}>{u.name}</li>
        })}
      </ul>
    </div>
  )
}

export default MultipleUseEffectInOneComponentWithFunction