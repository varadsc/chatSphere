import React from 'react'
import {sidebarData} from '../../utils/staticData'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SidbarStyles from './Sidebar.module.css'


export const Sidebar = () => {
  
    // const [keysTodisplay] = ['username']
    console.log('sidebar is' , sidebarData);

    return (
    <div  className={SidbarStyles.sidebar}>
        {sidebarData?.map((userChat) => {
            return(
                <div className='w-100 my-2'>
                    {/* <div className="d-flex"> */}
                        <Avatar className='me-3' size="large" icon={<UserOutlined />} />
                        <span style={{fontWeight :'700'}}>{userChat.userName}</span> 
                    {/* </div> */}
                </div>
            )
        })}

    </div>
  )
}
