import { Avatar } from 'antd'
import React from 'react'
import Styles from './ChatHeader.module.css'
import { MoreOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'

export const ChatHeader = () => {

  const name = useSelector((state) => state.selectedId.name)

  return (
    <div className={`w-100 m-0 py-3 px-3 ${Styles.heading}`}>
        <div>
        <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>{name[0].toUpperCase()}</Avatar>
        <span className='mx-2' style={{fontWeight :'600', fontSize:'1.3rem'}}>{name ? name  : null} </span>
        </div>

        <div className='mt-1'>
            <MoreOutlined style={{fontSize:'1.4rem'}} />
        </div>
        
    </div>
  )
}
