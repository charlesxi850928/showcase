import {Link} from 'react-router-dom'
import logo from '../../logo.svg'
import {SHOW_CASE} from '../../constants'

const Home = () => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <Link className='App-link' to='/showCase'>
        {SHOW_CASE}
      </Link>
    </header>
  </div>
)

export default Home
