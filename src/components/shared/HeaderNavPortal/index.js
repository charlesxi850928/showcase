import ReactDOM from 'react-dom'

const HeaderNavPortal = ({children}) => {
  const portalContainer = document.getElementById('header-nav-portal')
  return ReactDOM.createPortal(children, portalContainer)
}

export default HeaderNavPortal
