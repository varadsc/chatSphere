import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes} from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import { PageLayout } from './layouts/PageLayout'
import { Homepage } from './components/homepage/Homepage'
import { TrialComponent } from './components/trialComponent/TrialComponent'
import { ChannelListComponent } from './components/trialComponent/ChannelListComponent'
import { ChannelComponent } from './components/trialComponent/ChannelComponent'
import { ChatComponent } from './components/trialComponent/ChatComponent'
import axios from 'axios'

function App() {

  const [channels, setChannels] = useState([])
  const [channel, setChannel] = useState('')
  const [socket, setSocket] = useState(null);

  const loadChannels = async() => {
    const res = await axios.get('http://localhost:3300/getChannels');
    setChannels(res.data.channels)
  }
    useEffect(() => {
      loadChannels();
    }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<>welcome to login page</>}></Route>
        <Route path="/signup" element={<>welcome to signup page</>}></Route>
        <Route path='/trial' element={<TrialComponent />}></Route>
        {/* <Route path='/trial/channel' element={<ChannelComponent />}></Route> */}
        {/* <Route path='/trial/channelList' element={<ChannelListComponent />}></Route> */}
        <Route path='/trial/chat' element={<ChatComponent socket={socket} setSocket={setSocket} loadChannels={loadChannels}  channels={channels} setChannels={setChannels} channel={channel} setChannel={setChannel} />}></Route>

        <Route path='/' element={<PageLayout />}>
            <Route path='/' element={<Homepage />}></Route>
            <Route path="/about" element={<>welcome to Home page</>}></Route>  
        </Route>

      </Routes>
    </>
  )
}

export default App
