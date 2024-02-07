import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ChatHeader } from '../chatHeading/ChatHeader'
import { ChatFooter } from '../chatFooter/ChatFooter'
import { ChatBody } from '../chatBody/ChatBody'
import { io } from "socket.io-client";

export const Homepage = ({messages, setMessages}) => {

  // const [messageInput, setMessageInput] =useState('')
  const newSocket = useMemo(() => io('http://localhost:3300'))


  useEffect(() => {
    newSocket.on('connect' , () => {
      console.log('socket with id ' , newSocket.id ,'connected');
    })

    newSocket.on('send-message' , (message) => {
      console.log('recieved message ' , message);
      // let messgeArray = messages?.current;
      let messgeArray = messages;
      messgeArray?.push(message);
      // message.current = messgeArray
      console.log('msgarr', messgeArray);
      setMessages(messgeArray)
    })


  }, [])

  useEffect(() => {
    console.log('msssss' ,messages);
  }, [messages])

  // useEffect(() => {
  //   console.log('message is  , ', messages);
  // }, [messages])

  return (
    <div className="d-flex h-100 flex-column m-0 p-0">
        {/* <div> */}
            <ChatHeader />
        {/* </div> */}
        <ChatBody messages={messages} />       
        
        <div className='p-3' style={{position:'fixed', bottom :'0' ,width:'95%' }}>
           <ChatFooter newSocket={newSocket}  />
        </div>
    </div>
  )
}
