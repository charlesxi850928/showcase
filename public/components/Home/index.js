import {Link} from 'react-router-dom'
import logo from '../../logo.svg'
import '../../App.css'
import Footer from '../../Footer'
import {
  SHOW_CASE,
  SHOW_CASE_PATH,
  VISUALIZED,
  VISUALIZED_PATH,
  TOP_10_SCENICSPOTS,
  TOP_10_SCENICSPOTS_PATH
} from '../../constants'

const Home = () => (
  <>
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Link className='App-link' to={SHOW_CASE_PATH}>
          {SHOW_CASE}
        </Link>
        <Link className='App-link' to={VISUALIZED_PATH}>
          {VISUALIZED}
        </Link>
        <Link className='App-link' to={TOP_10_SCENICSPOTS_PATH}>
          {TOP_10_SCENICSPOTS}
        </Link>
      </header>
    </div>
    <Footer />
  </>
)

export default Home
