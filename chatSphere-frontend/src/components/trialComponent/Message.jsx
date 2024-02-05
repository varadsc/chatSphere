import React from 'react'

export const Message = ({senderName, text}) => {
  return (
    <div>
        <div className="message-item"></div>

                <div><b>{senderName}</b></div>
                <span>{text}</span>
    </div>
  )
}
