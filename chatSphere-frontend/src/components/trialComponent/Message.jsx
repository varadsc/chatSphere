import React from 'react'
import Styles from './ChatComponent.module.css'

export const Message = ({senderName, text}) => {
  return (
    <div className={Styles.messageItem}>
            <div><b>{senderName}</b></div>
            <span>{text}</span>
      </div>
  )
}
