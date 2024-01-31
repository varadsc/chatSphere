import React from 'react'
import { ChatHeader } from '../chatHeading/ChatHeader'
import { ChatFooter } from '../chatFooter/ChatFooter'

export const Homepage = () => {
  return (
    <div className="d-flex h-100 flex-column m-0 p-0">
        {/* <div> */}
            <ChatHeader />
        {/* </div> */}
        <div style={{flex: 0.87, backgroundColor : '#f0f5f5'}}  >
        </div>
        <div className='p-2' style={{flex: 0.13, backgroundColor : '#f0f5f5'}}>
           <ChatFooter />
        </div>
    </div>


  )
}
