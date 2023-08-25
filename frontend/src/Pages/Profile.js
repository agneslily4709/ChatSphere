import React, { useEffect, useState } from 'react'
import { ProfileContainer } from '../styles'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const [profile,setProfile] = useState(null)
  const loadProfile = async() =>{
    if(!localStorage.getItem("chat-sphere-user")){
      navigate("/login")
    }
    else{
      const userInfo = JSON.parse(localStorage.getItem("chat-sphere-user"))
      setProfile(userInfo)
    }
  }
  useEffect(() => {
    loadProfile()
  },[])
  return (
    <>
  {
  profile && 
          <ProfileContainer>
          <div className='profile'>
          <img className='avatar' src={profile.avatarImage+'.png'} alt='not found'></img>
          <div>
              <p>Id: {profile._id}</p>
              <p>Username: {profile.username}</p>
              <p>Email:{profile.email}</p>
          </div>
          </div>
      </ProfileContainer>
      }
    </>
  )
}

export default Profile