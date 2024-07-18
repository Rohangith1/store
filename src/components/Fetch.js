import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
        .catch(error=>console.error(error))
    },[])
  return (
    <div>
      <h1>User List</h1>
      <ul>
              {
                  users.map(userInfo=> {
                      return (
                        <li key={userInfo.id}>
                          {" "}
                          <a href={userInfo.html_url}>{userInfo.login}</a>
                        </li>
                      );
                      
                 
            
              }
            
        )}
      </ul>
    </div>
  );
}

export default Fetch