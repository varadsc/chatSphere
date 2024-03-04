import React from 'react'
import Styles from './ChatComponent.module.css'

export const ChannelComponent = ({id, name, participants, onClick}) => {

    // const handleClick = (id) => {
    //     console.log('chat selected for id ' , id);
    //     onSelect(id);
    //     getChannelList();
    // }

    const handleClick = () => {
      onClick(id);
  }

  return (
    <div>
         <div className={Styles.channelItem} onClick={handleClick}>
            <div>{name}</div>
            <span>{participants}</span>
        </div>
    </div>
  )
}
