import React from 'react'
import WelcomeGif from "../Assets/welcome-2.gif"
import { WelcomeContainer } from '../styles'
const Welcome = ({currentuser}) => {
  return (
    <WelcomeContainer>
        <h1 className='hello-text'>Hello!</h1>
        <p>Welcome {currentuser.username}</p>
        <span>Please, Select a chat and start messaging</span>
    </WelcomeContainer>
  )
}

export default Welcome