import React from 'react'

export const Message = ({senderName, text}) => {
  return (
    <div className='messageItem'>
            <div><b>{senderName}</b></div>
            <span>{text}</span>
      </div>
  )
}
