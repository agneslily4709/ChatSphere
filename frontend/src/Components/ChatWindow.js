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
    },[])
    const handleMsgSend = async(msg) => {
      const newMsg = {from_id:currUser._id,to_id:currentchat._id,text:msg}
      try {
        const response = await axios.post(`http://localhost:5000/api/user/sendMsg`,newMsg)
        setMessages(response.data)
        socket.current.emit("send-msg",newMsg)
        // if(chatMsgs.messages){
        //   const msgs = [...chatMsgs.messages,msg]
        //   msgs.push(newMsg)
        //   console.log(msgs)
        //   setMessages(msgs);
        //   console.log("===========")
        //   console.log(chatMsgs.messages)
        //   console.log("message sent successfully") 
        // }
      } catch (error) {
        console.log(error)
      }
    }


    useEffect(() => {
      if (socket.current) {
        socket.current.on("msg-recieve", (msg) => {
          console.log("===>",msg)
          setArrivalMessage({ message: msg });
        });
      }
    }, []);


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
                {chatMsgs ?
                <>{chatMsgs.messages.map((chat,index)=>(
                  <div ref={scrollRef} key={uuidv4()}  className='message'>
                      <div className={chat.sender === currentchat._id ?"sender":"receiver" } >
                          <p>{chat.text}</p>
                          <small>{chat.time}</small>
                      </div>
                  </div>
                ))}</>
                :
                <div>hello</div>}
              </MessageContainer>
              <ChatInput handleMsgSend={handleMsgSend} />
      </ChatWindowContainer>
    )}
    </>
  )
}

export default ChatWindow