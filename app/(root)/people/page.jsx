"use client";


import UserCard from '@components/cards/UserCard'
import React, { useEffect, useState } from 'react'

const People = () => {

  const [allUsers, setAllUsers] = useState([])

  const getAllUsers = async () => {
    const response = await fetch(`/api/user`)
    const data = await response.json()
    setAllUsers(data)
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return(
    <div className='flex flex-col gap-4 py-6'>
      {allUsers?.map((user) => (
        <UserCard key={user.id} userData={user} update={getAllUsers} />
      ))}
    </div>
  )
}

export default People