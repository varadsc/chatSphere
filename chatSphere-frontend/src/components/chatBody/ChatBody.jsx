import React from 'react'
import Styles from './ChatBody.module.css'
import { useSelector } from 'react-redux'


export const ChatBody = () => {

  const messagesData = useSelector((state) => state.messages.value);
  const selectedId = useSelector((state)=> state.selectedId.value)
  const messages =  messagesData[selectedId];


  return (
    <div  style={{flex: 1,  padding:'1rem',  marginBottom :'128px',  overflowY: 'auto'}}>
      {messages?.map((el , index) => (
        <>
        {el.issent ? 
          <div key={index} className='d-flex justify-content-end my-4 mx-1'>
            <div className={`p-2 ${Styles.sentMsg}`} >
              <div className='m-0 px-1' style={{wordWrap:'break-word'}}>
              {el.message}
              </div>
               <div className='m-0 px-1 d-flex align-items-end'> 
                  {/* <sub> */}
                    {el.time}
                  {/* </sub> */}
               </div> 
            </div>
          </div>
          :
          <div key={index} className='d-flex justify-content-start my-4 mx-1'>
            <div className={`px-1 py-2  ${Styles.recievedMsg}`} >
            <div className='m-0 px-1' style={{wordWrap:'break-word'}}>
              {el.message}
              </div>
               <div className='m-0 px-1 d-flex align-items-end'> 
                  {/* <sub> */}
                    {el.time}
                  {/* </sub> */}
               </div> 
            </div>
          </div>

      }
        </>
      ))}

 
    </div>
  )
}
