<<<<<<< HEAD
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

=======
import React from 'react'
import { ChatInputContainer } from '../styles'

const ChatInput = () => {
  return (
    <ChatInputContainer>
      <div className='input'>
        <form>
          <input type='text' placeholder='Type your message...'/>
          <button>Send</button>
        </form>
      </div>
    </ChatInputContainer>
  )
}

>>>>>>> 7884c5567a33a00e3bdf1ae0e1acec48e83242f2
export default ChatInput