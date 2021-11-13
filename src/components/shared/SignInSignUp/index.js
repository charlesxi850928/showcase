import {Grid} from '@mui/material'
import {useState} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const SignInSignUp = () => {
  const [zIndex, setZIndex] = useState({
    signInZIndex: 2,
    signInRotateY: 'rotateY(0deg)',
    signInOpacity: 1,
    signUpZIndex: 1,
    signOutRotateY: 'rotateY(-180deg)',
    signOutOpacity: 0
  })
  const toggleSignInSignUp = () => {
    if (zIndex.signInZIndex === 1) {
      setZIndex({
        signInZIndex: 2,
        signInRotateY: 'rotateY(0deg)',
        signInOpacity: 1,
        signUpZIndex: 1,
        signOutRotateY: 'rotateY(-180deg)',
        signOutOpacity: 0
      })
    } else {
      setZIndex({
        signInZIndex: 1,
        signInRotateY: 'rotateY(-180deg)',
        signInOpacity: 0,
        signUpZIndex: 2,
        signOutRotateY: 'rotateY(0deg)',
        signOutOpacity: 1
      })
    }
  }
  return (
    <Grid
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{
        '& > div': {
          position: 'absolute',
          transition: '1s ease-in-out'
        },
        '& .signInGrid': {
          zIndex: zIndex.signInZIndex,
          transform: zIndex.signInRotateY,
          opacity: zIndex.signInOpacity
        },
        '& .signUpGrid': {
          zIndex: zIndex.signUpZIndex,
          transform: zIndex.signOutRotateY,
          opacity: zIndex.signOutOpacity
        }
      }}
    >
      <SignIn toggleSignInSignUp={toggleSignInSignUp} />
      <SignUp toggleSignInSignUp={toggleSignInSignUp} />
    </Grid>
  )
}
export default SignInSignUp
