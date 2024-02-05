import React, { useEffect, useState } from 'react'
import { ChannelListComponent } from './ChannelListComponent';
import Styles from './ChatComponent.module.css'
import { MessagePanel } from './MessagePanel';
import axios from 'axios';

import io from 'socket.io-client';

export const ChatComponent = () => {

    const [channels,setChannels] =useState([
        // { id: 1, name: 'first', participants: 10 }
    ]);
    const socket = io('http://localhost:3300');


    const [channel, setChannel] = useState('')
    const [socketSelected, setSocketSelected] = useState('');

    // var socket = socketClient (SERVER);
    // const socket = io('http://localhost:3300');
    // socket.on('connection', () => {
    //     console.log(`I'm connected with the back-end`);
    // });
    
    const getChannelList = async() => {
        const res = await axios.get('http://localhost:3300/getChannels');
        console.log('checking ' , res);
        setChannels(res.data.channels)
    }
    useEffect(() => {
        getChannelList();
        configureSocket();
        console.log('useeffect called');
    }, [])

    // useEffect(() => {
    //     console.log('channellll' , channel);
    // }, [channel])

    
    // handleChannelSelect = id => {
    //     let channel = this.state.channels.find(c => {
    //         return c.id === id;
    //     });
    //     this.setState({ channel });
    //     this.socket.emit('channel-join', id, ack => {
    //     });
    // }
    const onSelect = (id) => {
        console.log('jhsidf', id);
        setChannel(id);
        socket.emit('channel-join', id, ack => {
        });
    }

    const configureSocket = () => {
        // var socket = socketClient(SERVER);
        socket.on('connection', () => {
            if (channel) {
                onselect(channel.id);
            }
        });
        socket.on('channel', channel => {
            
            console.log('channel on socket called');
            // let channels = this.state.channels;
            channels?.forEach(c => {
                if (c.id === channel.id) {
                    c.participants = channel.participants;
                }
            });
            console.log('jjjj' ,channels);
            // this.setState({ channels });
        });
        socket.on('message', message => {
            
            // let channels = this.state.channels
            const channelsUpdated = channels.forEach(c => {
                if (c.id === message.channel_id) {
                    if (!c.messages) {
                        c.messages = [message];
                    } else {
                        c.messages.push(message);
                    }
                }
            });
            console.log(channelsUpdated, 'updated channels')
            // this.setState({ channels });
        });
        // this.socket = socket;
        console.log('sleected socket ' ,socket);
        setSocketSelected(socket)
    }

    const handleSendMessage = (channel_id, text) => {
        socket.emit('send-message', { channel_id, text, senderName: socket, id: Date.now() });
    }
    

  
    return (
    <div>

    <div className={Styles.chatApp}>
        <ChannelListComponent channels={channels} setChannels={setChannels} onSelect={onSelect} getChannelList={getChannelList} />
        <MessagePanel channel={channel} handleSendMessage={handleSendMessage}/>
            </div>


    </div>
  )
}
