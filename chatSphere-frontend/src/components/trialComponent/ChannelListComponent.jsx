import React from 'react'
import { ChannelComponent } from './ChannelComponent'

export const ChannelListComponent = ({channels, setChannels, onSelectChannel , getChannelList}) => {

  const handleClick = id => {
    onSelectChannel(id);
}

let list = <div className="noContentMessage">There is no channels to show</div>;
if (channels && channels.map) {
    list = channels.map(c => <ChannelComponent key={c.id} id={c.id} name={c.name} participants={c.participants} onClick={handleClick} />);
}

  return (

    <div className='channelList'>
            {list}
        </div>

        
)
}

{/* {channels.length <= 0 ? 
    <>Nothing to show here</>
    :
    channels.map((el, index) => (
        <ChannelComponent getChannelList={getChannelList} onSelect={onSelect} key={index} keyval={index} id={el.id} name={el.name} participants={el.participants} />
    ))

} */}