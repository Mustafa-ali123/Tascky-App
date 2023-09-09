import React from 'react'
import Taskbar from './Taskbar'
import PresonProfile from './PresonProfile'
import Icon from "react-native-vector-icons/MaterialIcons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {useState} from 'react'
import Message from './Message'
import Folder from './Folder'
import Add from './Add'


export default function Tab() {
  const Bottom = createBottomTabNavigator()
  let [show ,setshow] =useState(false)
  return (<>
    <Bottom.Navigator>
      <Bottom.Screen options={{
        headerShown: false, tabBarIcon: (tabI) => {
          return <Icon name="home" size={40} style={{ color: tabI.focused ? "#9E9EFF" : "gray" }} />
        }
      }} name='Taskar' component={Taskbar} />

      <Bottom.Screen options={{
        headerShown: false, tabBarIcon: (tabI) => {
          return <Icon name="folder" size={40} style={{ color: tabI.focused ? "#9E9EFF" : "gray" }} />
        }
      }} name='Folder' component={Folder} />

      <Bottom.Screen options={{
        headerShown: false, tabBarIcon: (tabI) => {
          return <Icon name="add-circle" size={40} style={{ color: tabI.focused ? "#9E9EFF" : "#9E8EFF" }} />
        }
      }} name='Add' component={Add} />

      <Bottom.Screen options={{
        headerShown: false, tabBarIcon: (tabI) => {
          return <Icon name="sms" size={40} style={{ color: tabI.focused ? "#9E9EFF" : "gray" }} />
        }
      }} name='MSM' component={Message} />
      
      <Bottom.Screen options={{
        headerShown: false, tabBarIcon: (tabI) => {
          return <Icon name="account-circle" size={40} style={{ color: tabI.focused ? "#9E9EFF" : "gray" }} />
        }
      }} name='Profile' component={PresonProfile} />
    </Bottom.Navigator>
    {
      show??<Add/>
    }
    
    </>
  )
}
