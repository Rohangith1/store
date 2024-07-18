import React, { useEffect, useState } from 'react'

const MultipleReturn = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://api.github.com/users");
            const data = await response.json()
            setUsers(data)
            setIsLoading(false)
            }
            catch (err) {
                setError(err)
                setIsLoading(false)
            }
            
        }
        fetchUsers()
    },[])
    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>Error: { error.message}</p>

    }

  return (
      <div>
          <h1>Users List</h1>
          <ul>
              {
                  users.map(user => {
                      return <li key={user.id}>{ user.login}</li>
                  })
          }
          </ul>
      </div>
  )
}

export default MultipleReturn