import React from 'react'
import { ChatHeader } from '../chatHeading/ChatHeader'
import { ChatFooter } from '../chatFooter/ChatFooter'
import { ChatBody } from '../chatBody/ChatBody'

export const Homepage = () => {
  return (
    <div className="d-flex h-100 flex-column m-0 p-0">
        {/* <div> */}
            <ChatHeader />
        {/* </div> */}
        <ChatBody />       
        
        <div className='p-3' style={{position:'fixed', bottom :'0' ,width:'95%' }}>
           <ChatFooter />
        </div>
    </div>
  )
}
