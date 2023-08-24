import React from 'react'
import { ChatWindowContainer } from '../styles'
import ChatInput from './ChatInput'

const ChatWindow = ({currentchat}) => {
    console.log(currentchat)
    const handleMsgSend = (msg) => {

    }
  return (
    <>
    {currentchat && (
          <ChatWindowContainer>
          <img className='profile-pic' src={currentchat.avatarImage+".png"} alt='Not found'/>
            <h1>{currentchat.username}</h1>
          <div className='chat-messages'>
              <ChatInput handleMsgSend={handleMsgSend}/>
          </div>
      </ChatWindowContainer>
    )}
    </>
  )
}

export default ChatWindow