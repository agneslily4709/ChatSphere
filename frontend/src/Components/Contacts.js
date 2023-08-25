<<<<<<< HEAD
import React, { useState } from 'react'
import {ContactContainer } from '../styles'
import Welcome from './Welcome'
import ChatWindow from './ChatWindow'
import axios from "axios"
import {useParams} from "react-router-dom"
const Contacts = ({contacts,currentuser}) => {
  // const [selectedChat,setSelectedChat] = useState({})
  const [currentChat,setCurrentChat] = useState(undefined)
  const [chatMsgs,setChatMsgs] = useState(undefined)

  const handleChatChange = async(currentuser,contact) => {
    setCurrentChat(contact)
    const unique_id = currentuser._id+"-"+contact._id
    axios.get(`http://localhost:5000/api/user/${unique_id}`)
    .then((data)=>{
        setChatMsgs(data.data)
        console.log(data.data)
    })
    .catch((error) =>console.log(error))
  }
  return (
    <>
    <ContactContainer>
      <div className='chat'>
          <div className='left'>
          <h1>Available People</h1>
          {contacts.map((contact,index) => {
            return (
              <div onClick={()=>handleChatChange(currentuser,contact)} key={index} className='contact-item'>
                <img className='contact-pic' src={contact.avatarImage+".png"}alt='Profile Picture'/>
                <p>{contact.username}</p>
              </div>
            )
          })}
          </div>
          <div className='right'> 
          {currentChat === undefined ?
        <Welcome currentuser={currentuser}/>
        :
        <ChatWindow currentchat={currentChat} chatMsgs={chatMsgs}/>  
        }
            {/* <img className='profile-pic' src={currentuser.avatarImage+".png"}alt='Profile Picture'/>
              <h1>{currentuser.username}</h1> */}
          </div>
      </div>
    </ContactContainer> 
    </>
  )
}

=======
import React, { useState } from 'react'
import {ContactContainer } from '../styles'
import Welcome from './Welcome'
import ChatWindow from './ChatWindow'

const Contacts = ({contacts,currentuser}) => {
  const [selectedChat,setSelectedChat] = useState({})
  const [currentChat,setCurrentChat] = useState(undefined)
  // const changeCurrentChat = (index,contact) => {
  //   setCurrentChat(index)
  //   changeChat(contact)  
  // }
  const handleChatChange = (chat,contact) => {
    console.log(chat,contact)
    setCurrentChat(contact)
  }
  return (
    <>
    <ContactContainer>
      <div className='chat'>
        {/* <div className='side'> */}
          <div className='left'>
          <h1>Available People</h1>
          {contacts.map((contact,index) => {
            return (
              <div onClick={()=>handleChatChange(index,contact)} key={contact._id} className='contact-item'>
                <img className='contact-pic' src={contact.avatarImage+".png"}alt='Profile Picture'/>
                <p>{contact.username}</p>
              </div>
            )
          })}
          </div>
          <div className='right'> 
          {currentChat === undefined ?
        <Welcome currentuser={currentuser}/>
        :
        <ChatWindow currentchat={currentChat}/>  
        }
            {/* <img className='profile-pic' src={currentuser.avatarImage+".png"}alt='Profile Picture'/>
              <h1>{currentuser.username}</h1> */}
          </div>
      </div>
    </ContactContainer> 
    </>
  )
}

>>>>>>> 7884c5567a33a00e3bdf1ae0e1acec48e83242f2
export default Contacts