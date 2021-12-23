import PropTypes from 'prop-types'
import {shallowEqual, useSelector} from 'react-redux'
import {Container} from '@mui/material'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.scss'

const Layout = ({children}) => {
  const {brand} = useSelector(
    (state) => ({
      brand: state.shared.brand
    }),
    shallowEqual
  )
  const publicData = null // useSelector(selectors.getpublicData, shallowEqual)

  return (
    <Container
      disableGutters
      maxWidth={false}
      className={styles.layout}
      sx={{
        bgcolor: 'background.paper'
      }}
    >
      <Header data-ref='header' brand={brand} headerData={publicData.header} bannerData={publicData.bannerAlert} />
      <main className={styles.content} data-ref='main'>
        {children}
      </main>
      <Footer data-ref='footer' footerData={publicData.footer} />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.object
}

export default Layout
