import React, { useState } from 'react'
import { Message } from './Message'
import Styles from './ChatComponent.module.css'

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

    let list = <div className={Styles.noContentMessage}>There are no messages to show</div>;
    if (channel && channel.messages) {
        list = channel.messages.map(m => <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text} />);
    }

  return (
    <div className={Styles.messagesPanel}>
            <div className={Styles.messagesList}>{list}</div>
            {channel &&
                <div className={Styles.messagesInput}>
                    <input type="text" onChange={handleInput} value={inputValue} />
                    <button onClick={send}>Send</button>
                </div>
            }
    </div>
  )
}
