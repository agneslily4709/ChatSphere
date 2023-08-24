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

export default ChatInput