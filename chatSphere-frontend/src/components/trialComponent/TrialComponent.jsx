import React, { useEffect } from 'react'
import socketClient  from "socket.io-client";
const SERVER = "http://localhost:3300/socket.io/";
import io from 'socket.io-client';


export const TrialComponent = () => {

    // const socket = socketClient (SERVER);

    // const socket = io('http://localhost:3300');

    // // Event listener for the 'connection' event
    // socket.on('connection', (data) => {
    //   console.log('Connected to the server:', data);
    // });

    
    // useEffect(() => {
        
    //     // socket.on('connection', () => {
    //     //     console.log(`I'm connected with the back-end`);
    //     // });

    //     const socket = io('http://localhost:3300');

    //     // Event listener for the 'connection' event
    //     socket.on('connection', (data) => {
    //     console.log('Connected to the server:', data);
    // });

    // }, [])

  return (
    <div> Trial component ui </div>
  )
}

