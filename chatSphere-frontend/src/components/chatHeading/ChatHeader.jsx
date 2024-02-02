import { Avatar } from 'antd'
import React from 'react'
import Styles from './ChatHeader.module.css'
import { MoreOutlined } from '@ant-design/icons'

export const ChatHeader = () => {
  return (
    <div className={`w-100 m-0 py-2 px-3 ${Styles.heading}`}>
        <div>
        <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>TU</Avatar>
        <span className='mx-2' style={{fontWeight :'600', fontSize:'1.3rem'}}> Test User </span>
        </div>

        <div className='mt-1'>
            <MoreOutlined style={{fontSize:'1.4rem'}} />
        </div>
        
    </div>
  )
}
