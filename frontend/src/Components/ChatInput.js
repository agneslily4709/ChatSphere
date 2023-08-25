import React, { useState } from 'react'
import { ChatInputContainer } from '../styles'

const ChatInput = ({handleMsgSend}) => {
  const [msg,setMsg] = useState("")
  const sendChat = (e) =>{
    e.preventDefault()
    if(msg.length>0)
    {
      alert(msg)
      handleMsgSend(msg)
      setMsg("")
    }
  }
  return (
    <ChatInputContainer>
        <form className='input' onSubmit={(e)=>sendChat(e)}>
          <input value={msg} onChange={(e)=>{console.log(msg);setMsg(e.target.value)}} type='text' placeholder='Type your message...'/>
          <button>Send</button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput