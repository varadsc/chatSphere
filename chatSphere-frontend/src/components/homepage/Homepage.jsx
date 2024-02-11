import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ChatHeader } from '../chatHeading/ChatHeader'
import { ChatFooter } from '../chatFooter/ChatFooter'
import { ChatBody } from '../chatBody/ChatBody'
import { io } from "socket.io-client";
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie';
import { updateActiveUsers } from '../../redux/slices/ConnectedUserSlice';

export const Homepage = ({messages, setMessages}) => {

  // const [messageInput, setMessageInput] =useState('')'
  // const [messages,setMessages] = useState();

  useEffect(() => {
    console.log('msssss' ,messages);
  }, [messages])


  const newSocket = useMemo(() => io('http://localhost:3300'),[])
  const dispatch  = useDispatch();

  useEffect(() => {
    newSocket?.on("connect" , () => {
      const UserData = {
        'email'  :Cookies.get('email'),
        'name' :Cookies.get('name'),
        'id' : newSocket.id,
      }
      // console.log('socket with data ' , UserData);
      newSocket.emit('add-connected-user', UserData )
    })

    newSocket?.on('send-message' , (message) => {
      console.log('recieved message ' , message);
      setMessages((messages) => [...messages, message]);
    })

    newSocket.on('send-all-users' , (ConnectedUserList) => {
      dispatch(updateActiveUsers(ConnectedUserList));
    })

    return () => {
      socket.disconnect();
    };

  }, [])

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
           <ChatFooter setMessages={setMessages} messages={messages} newSocket={newSocket}  />
        </div>
    </div>
  )
}
