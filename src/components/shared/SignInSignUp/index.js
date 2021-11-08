import {Typography, Grid, Button, Link, Alert} from '@mui/material'
import {visuallyHidden} from '@mui/utils'
import {useState} from 'react'
import ATextBox from 'components/shared/ATextBox'
import {LockOutlined} from '@mui/icons-material'

import PropTypes from 'prop-types'

const LoginPolicy = ({context = {}}) => {
  const {text, link} = context
  return (
    <Grid container mt={3} alignItems='center' justifyContent='center'>
      {text && (
        <Typography color='textSecondary' display='flex' alignItems='center' variant='body2'>
          <LockOutlined sx={{width: '1rem', height: '1.2rem'}} />
          {text}
        </Typography>
      )}

      {link?.text && (
        <Typography variant='body2'>
          <Link underline='none' color='secondary' pl={1} href={link?.url} data-ref='policy-link'>
            {link?.text}
          </Link>
        </Typography>
      )}
    </Grid>
  )
}

LoginPolicy.propTypes = {
  context: PropTypes.object
}

const SignInSignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [alertErrorMsg, setAlertErrorMsg] = useState('')
  const [usernameErrorMsg, setUsernameErrorMsg] = useState('')
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
  const loginPageTexts = {
    subTitle: '',
    policy: {text: 'We take privacy seriously.', link: {text: 'Read our Privacy Policy', url: '#'}}
  }
  const {subTitle, policy} = loginPageTexts

  const loginTitle = 'Sign In'
  const dontHaveAccountText = `Don't have an account?`
  const signUpText = 'Sign Up'

  const passwordText = 'Password'
  const forgotPasswordText = 'Forgot your password?'

  const enterEmailText = 'Enter your email address'
  const enterPasswordText = 'Enter your password'
  const alertEmptyMsg = 'We need you to correct or provide more information. Please see each marked section.'
  const alertLoginFailedMsg =
    'Please verify your information or click the link "Forgot your Password?" to generate a new password.'
  const emptyEmailMsg = 'Please provide your email.'
  const emptyPasswordMsg = 'The Password should not be empty.'
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

  const verifyEmailAndPassword = () => {
    setUsernameErrorMsg('')
    setPasswordErrorMsg('')
    setAlertErrorMsg('')

    if (username.trim() === '') {
      setUsernameErrorMsg(emptyEmailMsg)
      if (password.trim() === '') {
        setPasswordErrorMsg(emptyPasswordMsg)
      }
      setAlertErrorMsg(alertEmptyMsg)
      return false
    }

    if (password.trim() === '') {
      setPasswordErrorMsg(emptyPasswordMsg)
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
    <Grid container mt={8} mb={16} justifyContent='center' className='signInGrid'>
      <Grid item xs={10} md={5} sx={{backgroundColor: 'common.white', padding: '2rem'}}>
        <Typography component='span' variant='h3' mb={2.5}>
          {loginTitle}
        </Typography>

        {subTitle && <Typography mb={2.5}>{subTitle}</Typography>}

        <Typography mb={3}>
          {dontHaveAccountText}
          <Link underline='none' color='secondary' pl={1} href='/signUp' data-ref='sign-up-link'>
            {signUpText}
          </Link>
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

          <Link underline='none' color='secondary' href='/' data-ref='forgot-password-link'>
            <Typography mb={3} mt={1.5}>
              {forgotPasswordText}
            </Typography>
          </Link>

          <Button
            data-ref='online-login-button'
            variant='contained'
            type='submit'
            sx={{display: 'block', width: '100%'}}
            size='large'
          >
            <Typography>{loginTitle}</Typography>
          </Button>
        </form>

        <LoginPolicy context={policy} />
      </Grid>
    </Grid>
  )
}
export default SignInSignUp
