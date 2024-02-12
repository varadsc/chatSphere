import React from 'react'
import Styles from './LoginPage.module.css'
import Cookies from 'js-cookie'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Success:', values);
    Cookies.set('email' , values.email)
    Cookies.set('name' , values.name)

    navigate('/chat')
  };

  return (
    <div className={Styles.pageheight}>
      <div className='w-100 h-100 d-flex '>
          <div className='col-7 d-flex justify-content-center align-items-center' style={{borderRight:'1px solid #a8d6ff'}}>
            <p className={Styles.AppLogo}>ChatApp</p>
          </div>
          <div className='col-5 d-flex flex-column justify-content-center align-items-center px-4'>
            <div className='my-4' style={{fontSize:'2rem', fontWeight :'bold'}}>Login</div>
          <Form
              name="Login"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              style={{
                width:'100%',
                maxWidth: 450,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                // label="Username"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input  placeholder='enter Email' className='px-3 py-2' />
              </Form.Item>

              <Form.Item
                // label="Username"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input  placeholder='enter Name' className='px-3 py-2' />
              </Form.Item>
              

              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
                // style={{textAlign :'center', margin : }}
                className='text-center my-5'
              >
                <Button  htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>


          </div>
      </div>
    </div>
  )
}
