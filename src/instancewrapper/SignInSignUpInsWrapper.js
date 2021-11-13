import SignInSignUpIns from 'components/SignInSignUpIns'
import InstanceWrapper from './InstanceWrapper'

export default () => (
  <InstanceWrapper
    name='SignInSignUpIns'
    comp={<SignInSignUpIns />}
    extraCodePaths={['components/shared/SignInSignUp/SignIn.js', 'components/shared/SignInSignUp/SignUp.js']}
  />
)
