import React from 'react'
import Styles from './ChatFooter.module.css'
import { SendOutlined } from '@ant-design/icons'

export const ChatFooter = () => {
  return (
    <div className='d-flex align-items-center'>
        <input placeholder='Type a message' type="text" className={Styles.InputBox} />
        <SendOutlined  style={{fontSize :'2rem', color : 'grey'}} />
        
    </div>
  )
}
