import React from 'react'

export const ChannelComponent = ({keyval, id, name, participants, onSelect, getChannelList}) => {

    const handleClick = (id) => {
        console.log('chat selected for id ' , id);
        onSelect(id);
        getChannelList();
    }

  return (
    <div>
        <div className="channel-item" key={keyval} onClick={() => handleClick(id)}>
            <div>{name}</div>
            <span>{participants ? participants :0}</span>
        </div>
    </div>
  )
}
