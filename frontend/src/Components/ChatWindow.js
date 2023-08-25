<<<<<<< HEAD
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

=======
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

>>>>>>> 7884c5567a33a00e3bdf1ae0e1acec48e83242f2
export default ChatWindow