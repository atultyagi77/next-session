import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'

export default function Home() {
  const [user, setUser] = useState(null)
  const router = useRouter()
  useEffect(() => {
    fetch("/api/getuser").then(async (res) => {
      const json = await res.json();
      if(!json.loggedIn){
        router.push("/login")
      }else{
        setUser(json)
      }
      
    })
  })

  const logout = async () => {
    const response = await fetch("/api/logout")
    router.push("/login")
  }

  return (
    <div className='container'>
      <h1 className='mt-5'> Welcome User </h1>
      <ul className="list-group mt-4">
        <li className="list-group-item">Name: {user?.name}</li>
        <li className="list-group-item">Age: {user?.age}</li>
        <li className="list-group-item">City: {user?.city}</li>
      </ul>
      <button className='btn btn-danger mt-4' onClick={logout}>Logout</button>
    </div>
  )
}
