import { useEffect, useState } from 'react'
import { api } from './axios'

export const CallApi = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const response = await api.get('')

      const data = response.data
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    console.log(users)
  }, [users])
}
