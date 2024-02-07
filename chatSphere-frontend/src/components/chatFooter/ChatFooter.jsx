import React, { useState } from 'react'
import Styles from './ChatFooter.module.css'
import { SendOutlined } from '@ant-design/icons'

export const ChatFooter = ({newSocket}) => {

  const [messageInput, setMessageInput] =useState('')

  const submitMessage =() =>{
    if(messageInput)
    {
      newSocket.emit('get-message' , {message :messageInput, id : newSocket.id})
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
