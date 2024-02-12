import React, { useState } from 'react'
import {sidebarData} from '../../utils/staticData'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SidbarStyles from './Sidebar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedId } from '../../redux/slices/SelectedChatId';


export const Sidebar = () => {
  
    // console.log('sidebar is' , sidebarData);
    const [selectedChat , setSelectedChat] = useState(1);
    const ActiveUsersData  =  useSelector((state) => state.connectedUsers.value);
    const dispatch =  useDispatch();

    const handleChatSelect = (id) => {
        console.log('chat change');
        dispatch(updateSelectedId(id))
        setSelectedChat(id);
    }

    console.log(ActiveUsersData);
    return (
    <div className={SidbarStyles.sidebar}>
        <>
        {ActiveUsersData?.map((userChat, index) =>(
                // <div className={`w-100 my-2 ${SidbarStyles.card}`}>
                    <div key={index} className={`row my-1 mx-0 p-1`} onClick={() => handleChatSelect(userChat.id)} style={selectedChat === userChat.id ? {backgroundColor:'#F1F4F9', borderRadius :'5px'} :{borderRadius :'5px'}}>
                        <div className="col-2 me-3 m-0 p-0">
                            <Avatar className='my-2' size="large" icon={<UserOutlined />} />
                        </div>
                        <div className="col m-0 p-0">
                            <p className='mt-3 m-0' style={{fontWeight :'700', fontSize:'0.9rem'}}>{userChat.name}</p> 
                            {/* <p className='mt-1 m-0' style={{fontSize:'0.7rem'}}>You: Hi ?</p> */}
                        </div>
                    </div>
                    
                // </div>
            )
        )}
        </>

    </div>
  )
}
