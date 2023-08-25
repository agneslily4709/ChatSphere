import React from 'react'
import { ChatWindowContainer } from '../styles'
import ChatInput from './ChatInput'
import Message from './Message'

const ChatWindow = ({currentchat,chatMsgs}) => {
    // console.log(currentchat)
    const handleMsgSend = (msg) => {

    }
  return (
    <>
    {currentchat && (
          <ChatWindowContainer>
              <div className='chat-header'>
                <img className='profile-pic' src={currentchat.avatarImage+".png"} alt='Not found'/>
                <h1>{currentchat.username}</h1>
              </div>
              <Message chatMsgs={chatMsgs}/>
              <ChatInput handleMsgSend={handleMsgSend}/>
      </ChatWindowContainer>
    )}
    </>
  )
}

export default ChatWindow