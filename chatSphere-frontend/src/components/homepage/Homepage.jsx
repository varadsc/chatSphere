import React from 'react'
import { ChatHeader } from '../chatHeading/ChatHeader'
import { ChatFooter } from '../chatFooter/ChatFooter'

export const Homepage = () => {
  return (
    <div className="d-flex h-100 flex-column m-0 p-0">
        {/* <div> */}
            <ChatHeader />
        {/* </div> */}
        <div style={{flex: 1, backgroundColor : '#f0f5f5'}}  >
        </div>
        <div className='p-3' style={{position:'fixed', bottom :'0' ,width:'95%' }}>
           <ChatFooter />
        </div>
    </div>


  )
}
