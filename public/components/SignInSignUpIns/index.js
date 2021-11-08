import SignInSignUp from 'components/shared/SignInSignUp'
import {useState} from 'react'
import {Typography, Button} from '@mui/material'
import APaper from 'components/shared/APaper'
import FullScreenDialog from 'components/shared/FullScreenDialog'

const SignInSignUpIns = () => {
  const [openSignInSignUp, setOpenSignInSignUp] = useState(true)
  return (
    <APaper>
      <Button onClick={() => setOpenSignInSignUp(true)}>
        <Typography>Sign In & Sign Up</Typography>
      </Button>
      <FullScreenDialog
        name='signInSignUp'
        openDialog={openSignInSignUp}
        setOpenDialog={setOpenSignInSignUp}
        paperPropsClassName='signInSignUpWrapper'
        paperPropsSX={{
          backgroundImage: 'url(assets/images/sign-in-sign-up/bg.jpg)',
          backgroundSize: 'cover',
          '& > div': {
            maxWidth: '100% !important',
            width: '100% !important'
          },
          '& .signInGrid > div': {
            boxShadow:
              '-10px -10px 20px rgb(255 255 255 / 10%), 10px 10px 20px rgb(0 0 0 / 10%), 0px 40px 50px rgb(0 0 0 / 20%);'
          }
        }}
      >
        <SignInSignUp />
      </FullScreenDialog>
    </APaper>
  )
}

export default SignInSignUpIns
