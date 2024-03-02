import React, { useState } from 'react'
import Styles from './ChatFooter.module.css'
import { SendOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'

export const ChatFooter = ({newSocket,messages, setMessages}) => {

  const [messageInput, setMessageInput] =useState('')
  const selectedId = useSelector((state) =>  state.selectedId.value);

  const submitMessage =() =>{
    if(messageInput)
    {
      const messageData = {
        recieverId : selectedId,
        message  : messageInput
      }
      newSocket?.emit('send-msg-socket' , messageData)
      setMessages((messages) => [...messages, messageInput]);
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
