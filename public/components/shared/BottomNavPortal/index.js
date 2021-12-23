import {useLayoutEffect} from 'react'
import ReactDOM from 'react-dom'

const BottomNavPortal = ({children}) => {
  const portalContainer = document.getElementById('bottom-nav-portal')
  useLayoutEffect(() => {
    // solve bottom info bar overlap footer a bit issue on mobile
    const footer = document.querySelector('footer')
    footer.style.paddingBottom = `${portalContainer?.firstChild?.getBoundingClientRect()?.height}px`
    return () => {
      footer.style.paddingBottom = '0'
    }
  }, [])
  return ReactDOM.createPortal(children, portalContainer)
}

export default BottomNavPortal
