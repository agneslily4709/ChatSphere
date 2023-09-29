import React, { useState } from 'react'
import {ContactContainer } from '../styles'
import Welcome from './Welcome'
import ChatWindow from './ChatWindow'
import axios from "axios"

const Contacts = ({contacts,currentuser,socket}) => {
  const [currentChat,setCurrentChat] = useState(undefined)
  const [chatMsgs,setChatMsgs] = useState(undefined)

  const handleChatChange = async(currentuser,contact) => {
    const unique_id = [currentuser._id,contact._id].sort().join('-').split('').reduce((hash, char) => (hash << 5) - hash + char.charCodeAt(0), 0).toString();
    await axios.get(`https://chat-sphere-backend.onrender.com/api/user/${unique_id}`)
    .then((data)=>{
        setChatMsgs(data.data)
    })
    .catch((error) =>console.log(error))
    setCurrentChat(contact)
  }
  return (
    <>
    <ContactContainer>
      <div className='chat'>
          <div className='left'>
          <h1 className='chat-tagline'>Available People</h1>
          {contacts.map((contact,index) => {
            return (
              <div onClick={()=>handleChatChange(currentuser,contact)} key={index} className='contact-item'>
                <img className='contact-pic' src={contact.avatarImage+".png"}alt={`Pic ${contact.username}`}/>
                <p className='username'>{contact.username}</p>
              </div>
            )
          })}
          </div>
          <div className='right'> 
          {currentChat === undefined ?
        <Welcome currentuser={currentuser}/>
        :
        <ChatWindow currentchat={currentChat} chatMsgs={chatMsgs} socket={socket}/>  
        }
          </div>
      </div>
    </ContactContainer> 
    </>
  )
}

export default Contacts