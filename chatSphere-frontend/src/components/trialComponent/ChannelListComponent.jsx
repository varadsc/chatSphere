import React from 'react'
import { ChannelComponent } from './ChannelComponent'
import Styles from './ChatComponent.module.css'

export const ChannelListComponent = ({channels, setChannels, onSelectChannel , getChannelList}) => {

  const handleClick = id => {
    onSelectChannel(id);
}

// let list = <div className={Styles.noContentMessage}>There is no channels to show</div>;
// if (channels && channels.map) {
//     list = channels.map(c => <ChannelComponent key={c.id} id={c.id} name={c.name} participants={c.participants} onClick={handleClick} />);
// }

  return (

    <div className={Styles.channelList}>
            {/* {list} */}
            {
              channels?.length <= 0 ? <div className={Styles.noContentMessage}>There is no channels to show</div> :
                channels?.map((c) => (
                  <ChannelComponent key={c.id} id={c.id} name={c.name} participants={c.participants} onClick={handleClick} />
                ))
            }

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