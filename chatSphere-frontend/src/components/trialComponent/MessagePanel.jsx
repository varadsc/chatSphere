import React, { useState } from 'react'
import { Message } from './Message'

export const MessagePanel = ({ channel, onSendMessage }) => {

    const [inputValue, setInputValue] = useState('');

    const send = () => {
        if (inputValue.trim() !== '') {
            onSendMessage(channel.id, inputValue);
            setInputValue('');
        }
    };

    const handleInput = e => {
        setInputValue(e.target.value);
    };

    let list = <div className="noContentMessage">There are no messages to show</div>;
    if (channel && channel.messages) {
        list = channel.messages.map(m => <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text} />);
    }

  return (
    <div className='messagesPanel'>
            <div className="messages-list">{list}</div>
            {channel &&
                <div className="messagesInput">
                    <input type="text" onChange={handleInput} value={inputValue} />
                    <button onClick={send}>Send</button>
                </div>
            }
    </div>
  )
}
