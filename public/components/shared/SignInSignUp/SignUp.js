import {Typography, Grid, Button, Alert} from '@mui/material'
import {visuallyHidden} from '@mui/utils'
import {useState} from 'react'
import ATextBox from 'components/shared/ATextBox'
import PropTypes from 'prop-types'

const SignUp = ({toggleSignInSignUp}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [alertErrorMsg, setAlertErrorMsg] = useState('')
  const [usernameErrorMsg, setUsernameErrorMsg] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
  const [rePasswordErrorMsg, setRePasswordErrorMsg] = useState('')
  const loginPageTexts = {
    subTitle: '',
    policy: {text: 'We take privacy seriously.', link: {text: 'Read our Privacy Policy', url: '#'}}
  }
  const {subTitle} = loginPageTexts

  const signUpTitle = 'Sign Up'
  const haveAccountText = `Have an account?`
  const signInText = 'Sign In'

  const passwordText = 'Password'
  const rePasswordText = 'Re-Password'

  const enterEmailText = 'Enter your email address'
  const enterPasswordText = 'Enter your password'
  const enterRePasswordText = 'Enter your password again'
  const alertEmptyMsg = 'We need you to correct or provide more information. Please see each marked section.'
  const alertLoginFailedMsg = 'Please verify your information and make sure your email is valid.'
  const emptyEmailMsg = 'Please provide your email.'
  const emptyPasswordMsg = 'The Password should not be empty.'
  const notMatchPasswordMsg = `Two times Password don't match.`
  const emailLabel = 'Email'

  const updateUsername = (event) => {
    if (usernameErrorMsg) {
      setUsernameErrorMsg('')
    }
    setUsername(event.target.value)
  }

  const updatePassword = (event) => {
    if (passwordErrorMsg) {
      setPasswordErrorMsg('')
    }
    setPassword(event.target.value)
  }

  const updateRePassword = (event) => {
    if (rePasswordErrorMsg) {
      setRePasswordErrorMsg('')
    }
    setRePassword(event.target.value)
  }

  const verifyEmailAndPassword = () => {
    setUsernameErrorMsg('')
    setPasswordErrorMsg('')
    setRePasswordErrorMsg('')
    setAlertErrorMsg('')

    if (username.trim() === '') {
      setUsernameErrorMsg(emptyEmailMsg)
      if (password.trim() === '') {
        setPasswordErrorMsg(emptyPasswordMsg)
      }
      if (rePassword.trim() === '') {
        setRePasswordErrorMsg(emptyPasswordMsg)
      }
      setAlertErrorMsg(alertEmptyMsg)
      return false
    }

    if (password.trim() === '') {
      setPasswordErrorMsg(emptyPasswordMsg)
      setAlertErrorMsg(alertEmptyMsg)
      return false
    }

    if (rePassword.trim() === '') {
      setRePasswordErrorMsg(emptyPasswordMsg)
      setAlertErrorMsg(alertEmptyMsg)
      return false
    }

    if (rePassword.trim() !== password.trim()) {
      setRePasswordErrorMsg(notMatchPasswordMsg)
      setAlertErrorMsg(alertEmptyMsg)
      return false
    }

    const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    if (!emailReg.test(username)) {
      setUsername('')
      setAlertErrorMsg(alertLoginFailedMsg)
      return false
    }

    return true
  }

  const login = async (event) => {
    event.preventDefault()

    // eslint-disable-next-line no-empty
    if (verifyEmailAndPassword()) {
    }
  }

  return (
    <Grid container justifyContent='center' className='signUpGrid'>
      <Grid item xs={10} md={5} sx={{backgroundColor: 'common.white', padding: '2rem'}}>
        <Typography component='span' variant='h3' mb={2.5}>
          {signUpTitle}
        </Typography>

        {subTitle && <Typography mb={2.5}>{subTitle}</Typography>}

        <Typography mb={3}>
          {haveAccountText}
          <Button
            color='secondary'
            sx={{textTransform: 'unset'}}
            pl={1}
            onClick={toggleSignInSignUp}
            data-ref='sign-in-link'
          >
            {signInText}
          </Button>
        </Typography>

        {alertErrorMsg && (
          <Alert severity='error' sx={{mb: 2}} data-ref='login-error-msg'>
            {alertErrorMsg}

            <Typography sx={visuallyHidden}>
              {usernameErrorMsg} {passwordErrorMsg}
            </Typography>
          </Alert>
        )}

        <form onSubmit={login}>
          <ATextBox
            sx={{my: 1}}
            id='login-username'
            severity='error'
            labelProps={{label: emailLabel, required: true}}
            placeholder={enterEmailText}
            value={username}
            helperText={usernameErrorMsg}
            onChange={updateUsername}
          />
          <ATextBox
            sx={{mt: 2, mb: 1}}
            id='password'
            severity='error'
            type='password'
            autoComplete='current-password'
            labelProps={{label: passwordText, required: true}}
            placeholder={enterPasswordText}
            value={password}
            helperText={passwordErrorMsg}
            onChange={updatePassword}
          />

          <ATextBox
            sx={{mt: 2, mb: 2.3}}
            id='re-password'
            severity='error'
            type='password'
            autoComplete='re-current-password'
            labelProps={{label: rePasswordText, required: true}}
            placeholder={enterRePasswordText}
            value={rePassword}
            helperText={rePasswordErrorMsg}
            onChange={updateRePassword}
          />

          <Button
            data-ref='online-login-button'
            variant='contained'
            type='submit'
            sx={{display: 'block', width: '100%'}}
            size='large'
          >
            <Typography>{signUpTitle}</Typography>
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

SignUp.propTypes = {
  toggleSignInSignUp: PropTypes.func
}

export default SignUp
