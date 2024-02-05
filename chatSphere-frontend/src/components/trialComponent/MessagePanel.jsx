import React, { useState } from 'react'
import { Message } from './Message'

export const MessagePanel = ({channel, handleSendMessage}) => {

    const [input, setInput]= useState('')

    const sendButtonClick = () =>{
        if(input)
        {
            handleSendMessage(channel, input);
        }
        setInput('');
    }
    
  return (
    <div>
        <div className="messages-panel"></div>

                {/* <div className="meesages-list">
                    {channel?.messages.map(el => (
                        <Message key="{m.id}" id="{m.id}" sendername="{m.senderName}" text="{m.text}" />
                        )
                    )}
                </div> */}

                <div className="messages-input"></div>

                    <input type="text"  onChange={(e) => setInput(e.target.value)}/>
                    <button onClick={sendButtonClick}>Send</button>
    </div>
  )
}
