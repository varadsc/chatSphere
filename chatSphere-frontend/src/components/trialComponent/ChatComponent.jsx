import React, { useEffect, useState } from 'react'
import { ChannelListComponent } from './ChannelListComponent';
import Styles from './ChatComponent.module.css'
import { MessagePanel } from './MessagePanel';
import axios from 'axios';

// import io from 'socket.io-client';
import socketClient from "socket.io-client";

// const SERVER = 'http://localhost:3300';
const SERVER = 'https://chat-sphere-backend.vercel.app/';

export const ChatComponent = ({channels,setChannels, channel, setChannel, socket, setSocket}) => {

    // const [channels,setChannels] =useState([
    //     // { id: 1, name: 'first', participants: 10 }
    // ]);
    // const socket = io('http://localhost:3300');

    
    // const [socketSelected, setSocketSelected] = useState('');
    

    // var socket = socketClient (SERVER);
    // const socket = io('http://localhost:3300');
    // socket.on('connection', () => {
    //     console.log(`I'm connected with the back-end`);
    // });
    
    
    // useEffect(() => {
    //     getChannelList();
    //     configureSocket();
    //     console.log('useeffect called');
    // }, [])

    
      
    useEffect(() => {
      console.log('called');
      configureSocket();
    }, [])

      // useEffect(() => {
      //   console.log('values of channels ' , channels , ' one channel ' , channel , 'and socket is ' , socket);
      // }, [channel,channels,socket])

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
    // const onSelect = (id) => {
    //     console.log('jhsidf', id);
    //     setChannel(id);
    //     socket.emit('channel-join', id, ack => {
    //     });
    // }

    const handleChannelSelect = (id) => {
        const selectedChannel = channels.find(c => c.id === id);
        setChannel(selectedChannel);
        socket.emit('channel-join', id, ack => {});
      };


    // const configureSocket = () => {
    //     // var socket = socketClient(SERVER);
    //     socket.on('connection', () => {
    //         if (channel) {
    //             onselect(channel.id);
    //         }
    //     });
    //     socket.on('channel', channel => {
            
    //         console.log('channel on socket called');
    //         // let channels = this.state.channels;
    //         channels?.forEach(c => {
    //             if (c.id === channel.id) {
    //                 c.participants = channel.participants;
    //             }
    //         });
    //         console.log('jjjj' ,channels);
    //         // this.setState({ channels });
    //     });
    //     socket.on('message', message => {
            
    //         // let channels = this.state.channels
    //         const channelsUpdated = channels?.forEach(c => {
    //             if (c.id === message.channel_id) {
    //                 if (!c.messages) {
    //                     c.messages = [message];
    //                 } else {
    //                     c.messages.push(message);
    //                 }
    //             }
    //         });
    //         console.log(channelsUpdated, 'updated channels')
    //         // this.setState({ channels });
    //     });
    //     // this.socket = socket;
    //     console.log('sleected socket ' ,socket);
    //     setSocketSelected(socket)
    // }

    const configureSocket = () => {
        const newSocket = socketClient(SERVER);
    
        newSocket.on('connection', () => {
          if (channel) {
            handleChannelSelect(channel.id);
          }
        });
    
        newSocket.on('channel', newChannel => {
          // const updatedChannels = channels.map(c => (c.id === newChannel.id ? { ...c, participants: newChannel.participants } : c));
          const updatedChannels = channels?.forEach(c => {
            if (c.id === channel.id) {
                c.participants = channel.participants;
            }
        });
        // console.log('yyyy' , updatedChannels);
          setChannels(updatedChannels);
        });
    
        newSocket.on('message', message => {
          const updatedChannels = channels.map(c => {
            if (c.id === message.channel_id) {
              c.messages = c.messages ? [...c.messages, message] : [message];
            }
            return c;
          });
          setChannels(updatedChannels);
        });
    
        setSocket(newSocket);
      };

    // const handleSendMessage = (channel_id, text) => {
    //     // socket.emit('send-message', { channel_id, text, senderName: socket, id: Date.now() });
    //     socket.emit('send-message', { data : 'hello' });
    // }
    
    const handleSendMessage = (channel_id, text) => {
        socket.emit('send-message', { channel_id, text, senderName: socket.id, id: Date.now() });
      };

  
    return (

    <div className={Styles.chatApp}>
        <ChannelListComponent channels={channels} setChannels={setChannels} onSelectChannel={handleChannelSelect} />
        <MessagePanel channel={channel} onSendMessage={handleSendMessage}/>
    </div>

  )
}
