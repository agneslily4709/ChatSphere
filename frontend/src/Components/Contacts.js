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

export default Contacts