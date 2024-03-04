import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ChatHeader } from '../chatHeading/ChatHeader'
import { ChatFooter } from '../chatFooter/ChatFooter'
import { ChatBody } from '../chatBody/ChatBody'
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie';
import { updateActiveUsers } from '../../redux/slices/ConnectedUserSlice';
import { updateMessages } from '../../redux/slices/Messages';

export const Homepage = ({}) => {

  // const [messageInput, setMessageInput] =useState('')'
  // const [messages,setMessages] = useState();


  const ChatSelected = useSelector((state) => state.selectedId.value)


  const newSocket = useMemo(() => io('http://localhost:3300'),[])
  const dispatch  = useDispatch();

  useEffect(() => {
    newSocket?.on("connect" , () => {
      const UserData = {
        'email' :Cookies.get('email'),
        'name'  :Cookies.get('name'),
        'id' : newSocket.id,
      }
      // console.log('socket with data ' , UserData);
      newSocket.emit('add-connected-user', UserData)
    })

    newSocket?.on('get-msg-socket' , (messageData) => {
      console.log('recieved message ' , messageData);

      const gloabalMsgData = {
        id : messageData.senderId,
        message  : messageData.message,
        time : messageData.time,
        issent : false
      }
      dispatch(updateMessages(gloabalMsgData));

      // setMessages((messages) => [...messages, messageData.message]);
    })

    newSocket?.on('send-all-users' , (ConnectedUserList) => {
      const UsersExceptSelf = filterById(ConnectedUserList, Cookies.get('email'))
      dispatch(updateActiveUsers(UsersExceptSelf));
    })

    return () => {
      newSocket.disconnect();
    };

  }, [])

  const filterById = (array, email) =>  {
    return array.filter(obj => obj.email !== email);
  }

  // useEffect(() => {
  //   console.log('message is  , ', messages);
  // }, [messages])

  return (
    <div className="d-flex h-100 flex-column m-0 p-0">
        {/* <div> */}
        {
          ChatSelected ? 
          <>
                <ChatHeader />
            <ChatBody />       
            
            <div className='p-3' style={{position:'fixed', bottom :'0' ,width:'95%' }}>
              <ChatFooter newSocket={newSocket}  />
            </div>
          </>
        :
        <div className='p-5'>
          Select a chat first
        </div>
        }
    </div>
  )
}
