import React, { useState } from 'react'
import Styles from './ChatFooter.module.css'
import { SendOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { updateMessages } from '../../redux/slices/Messages'

export const ChatFooter = ({newSocket}) => {

  const [messageInput, setMessageInput] =useState('')
  const selectedId = useSelector((state) =>  state.selectedId.value);
  const dispatch = useDispatch();

  const submitMessage =() =>{
    
    if(messageInput)
    {
      var datetime = new Date(); // for now
      datetime.getHours(); 
      datetime.getMinutes();
      const timeStr  = `${datetime.getHours()}:${datetime.getMinutes()}`;

      const messageData = {
        senderId : newSocket.id,
        recieverId : selectedId,
        message  : messageInput,
        time : timeStr,
      }
      newSocket?.emit('send-msg-socket' , messageData)
      // setMessages((messages) => [...messages, messageInput]);
      const gloabalMsgData = {
        id : selectedId,
        message  : messageInput,
        time : timeStr,
        issent : true
      }
      dispatch(updateMessages(gloabalMsgData));
      setMessageInput('');
    }
  }

  return (
    <div className='d-flex align-items-center'>
        <input placeholder='Type a message' value={messageInput} type="text" className={Styles.InputBox} onChange={(e) => setMessageInput(e.target.value)} />
        <SendOutlined onClick={submitMessage}  style={{fontSize :'2rem', color : 'grey'}} />
        
    </div>
  )
}
