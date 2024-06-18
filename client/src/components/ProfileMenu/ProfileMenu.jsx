import React from 'react'
import {Avatar, Menu} from '@mantine/core'
import { useNavigate } from 'react-router-dom'
const ProfileMenu = ({user, logout}) => {
    const navigate = useNavigate()
  return (
    <Menu>
        <Menu.Target>
            <Avatar src={user?.picture} alt='user image' radius={"xl"}/>
        </Menu.Target>
        <Menu.Dropdown>
            <Menu.Item onClick={()=> navigate("./favourites", {replace: true})}>
                المفضلة 
            </Menu.Item>

            <Menu.Item onClick={()=> navigate("./bookings", {replace: true})}>
                الحجوزات
            </Menu.Item>

            <Menu.Item onClick={()=>{
                localStorage.clear();
                logout()
            }}>
                تسجيل خروج
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu