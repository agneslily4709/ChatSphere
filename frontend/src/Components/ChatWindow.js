import React, { useEffect, useState,useRef } from 'react'
import { ChatWindowContainer,MessageContainer } from '../styles'
import ChatInput from './ChatInput'
import axios from "axios"
import {v4 as uuidv4} from "uuid"

const ChatWindow = ({currentchat,chatMsgs,socket}) => {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currUser,setCurrUser] = useState({})
  
  const scrollRef = useRef();
    useEffect(()=>{
      const userInfo = JSON.parse(localStorage.getItem("chat-sphere-user"))
      setCurrUser(userInfo)
      if(chatMsgs){setMessages(chatMsgs.messages)}
      else{setMessages([])}
    },[chatMsgs])

    const handleMsgSend = async(msg) => {
      const newMsg = {from_id:currUser._id,to_id:currentchat._id,text:msg}
      try {
        const response = await axios.post(`https://chat-sphere-backend.onrender.com/api/user/sendMsg`,newMsg)
        setMessages(response.data.messages)
        socket.current.emit("message-send",newMsg)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      if(socket.current)
      {
        socket.current.on("message-recieve", (msg) => {
          setArrivalMessage(msg);
        });
      }
    }, [messages,socket]);


    useEffect(() => {
      arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);

    
    useEffect(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

  return (
    
    <>
    {currentchat && (
          <ChatWindowContainer>
              <div className='chat-header'>
                <img className='profile-pic' src={currentchat.avatarImage+".png"} alt='Not found'/>
                <h1>{currentchat.username}</h1>
              </div>
              <MessageContainer>
                {messages && messages.length>0 ?
                <>{messages.map((chat,index)=>(
                  <div ref={scrollRef} key={uuidv4()}  className='message'>
                      <div className={(chat.sender === currentchat._id) || (chat.from_id === currentchat._id) ?"sender":"receiver" } >
                          <p>{chat.text}</p>
                          <small>{chat.time}</small>
                      </div>
                  </div>
                ))}</>
                :
                <div></div>}
              </MessageContainer>
              <ChatInput handleMsgSend={handleMsgSend} />
      </ChatWindowContainer>
    )}
    </>
  )
}

export default ChatWindow