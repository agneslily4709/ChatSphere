import React, { useEffect, useState } from 'react'
import { ChatContainer,LoaderContainer } from '../styles'
import Contacts from '../Components/Contacts'
import axios from "axios"
import Loader from "../Assets/loader.gif"
import { useNavigate } from 'react-router-dom'
const Chat = () => {
  const [allData,setAllData] = useState([])
  const [loading,setLoading] = useState(true)
  const [currUser,setCurrUser] = useState({})
  const navigate = useNavigate()
  // const [currentChat,setCurrentChat] = useState(undefined)
  const currentUser = JSON.parse(localStorage.getItem("chat-sphere-user"))
  const loadData = async() => {
    const data = await axios.get(`http://localhost:5000/api/user/`)
    const filteredData = data.data.filter(item => item._id !== currentUser._id);
    setCurrUser(currentUser)
    setAllData(filteredData)
    setLoading(false)
  }
  useEffect(()=>{
    if(!localStorage.getItem("chat-sphere-user")){
      navigate("/login")
    }
    loadData()
  },[])
  return (
    <>
    {loading ? <LoaderContainer>
    <img className='loader' src={Loader} alt="Loading..."/>
    </LoaderContainer>
    :
    <ChatContainer>
        <Contacts contacts={allData} currentuser={currUser}/>
    </ChatContainer>
}
    </>
  )
}

export default Chat