<<<<<<< HEAD
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

=======
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

>>>>>>> 7884c5567a33a00e3bdf1ae0e1acec48e83242f2
export default Welcome