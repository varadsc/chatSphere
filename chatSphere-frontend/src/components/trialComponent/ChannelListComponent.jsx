import React from 'react'
import { ChannelComponent } from './ChannelComponent'

export const ChannelListComponent = ({channels, setChannels, onSelect, getChannelList}) => {
  return (
    <div>
        
    {channels.length <= 0 ? 
        <>Nothing to show here</>
        :
        channels.map((el, index) => (
            <ChannelComponent getChannelList={getChannelList} onSelect={onSelect} key={index} keyval={index} id={el.id} name={el.name} participants={el.participants} />
        ))

    }

    </div>
  )
}
