import PropTypes from 'prop-types'
import {T, useT} from 'i18n'
import {Grid, TextField, Button, Box, List, ListItem, MobileStepper} from '@mui/material'
import {useState, useEffect} from 'react'
import ATypography from 'mui/ATypography'
import muiIconList from 'mui/IconList'
import Link from 'mui/Link'
import useDeviceView from 'hooks/useDeviceView'
import styles from '../Footer.module.scss'

const AccordionContent = ({title, children}) => {
  const {isDesktopView, isDesktopDownView} = useDeviceView()

  const [open, setOpen] = useState(true)
  const handleToggle = () => {
    if (isDesktopDownView) {
      setOpen(!open)
    }
  }
  useEffect(() => {
    if (isDesktopView) {
      setOpen(true)
    }
    if (isDesktopDownView) {
      setOpen(false)
    }
  }, [isDesktopView, isDesktopDownView])
  return (
    <>
      <Box sx={{display: 'flex', height: '1.2rem', justifyContent: 'space-between', mb: 1}} onClick={handleToggle}>
        <ATypography w6 component='h3'>
          {title}
        </ATypography>
        {isDesktopDownView && <muiIconList.KeyboardArrowDownIcon />}
      </Box>
      <MobileStepper
        variant='progress'
        steps={6}
        position='static'
        activeStep={1}
        aria-hidden
        sx={{
          p: 0,
          flexGrow: 1,
          background: 'transparent',
          '& .MuiMobileStepper-progress': {
            height: '2px',
            width: '100%'
          }
        }}
      />

      <Box sx={{display: open ? 'block' : 'none'}}>{children}</Box>
    </>
  )
}

AccordionContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}
const LinkContainer = ({linkData = []}) => (
  <List>
    {linkData.map((item) => (
      <ListItem key={item.label} disablePadding>
        <Link href={item.path} color='inherit' underline='none' sx={{padding: '0.5rem 0'}}>
          <ATypography variant='body2' component='span'>
            {item.label}
          </ATypography>
        </Link>
      </ListItem>
    ))}
  </List>
)
LinkContainer.propTypes = {
  linkData: PropTypes.array
}

const EmailForm = () => {
  const emailInputLabel = useT({k: 'Common.footer.email_address_label'})
  return (
    <Box sx={{display: 'flex'}} className={styles.signUp}>
      <TextField
        data-ref='email-input'
        color='primary'
        className={styles.emailText}
        InputProps={{
          sx: {
            borderRadius: '2.5rem 0 0 2.5rem',
            backgroundColor: 'background.paper'
          }
        }}
        id='email-input'
        label={emailInputLabel}
        variant='outlined'
      />

      <Button className={styles.button} variant='contained' data-ref='sign-up-btn'>
        <ATypography component='span'>
          <T k='Common.footer.sign_up' />
        </ATypography>
      </Button>
    </Box>
  )
}

const Links = ({footerData}) => {
  const logoPath = footerData?.logo
  const logoAltText = useT({k: 'Common.footer.footer_logo'})
  const {information, customerLinks, newsLetter} = footerData || {}

  return (
    <Grid sx={{pt: 2, pb: {xs: 0, md: 4}, justifyContent: 'space-between'}} container spacing={3} component='section'>
      <Grid item md={2} xs={12}>
        <Link
          data-ref='footer-contract-logo'
          href={footerData?.logoLink}
          sx={{
            display: 'block',
            maxHeight: {xs: '5rem', md: '6rem'},
            maxWidth: {xs: '10rem', md: '20rem'}
          }}
        >
          <img src={logoPath} alt={logoAltText} width='100%' height='100%' />
        </Link>
      </Grid>
      <Grid item md={3} xs={12}>
        <AccordionContent title={information.title}>
          <LinkContainer linkData={information.links} />
        </AccordionContent>
      </Grid>
      <Grid item md={3} xs={12}>
        <AccordionContent title={customerLinks.title}>
          <LinkContainer linkData={customerLinks.links} />
        </AccordionContent>
      </Grid>
      {newsLetter && (
        <Grid item md={4} xs={12}>
          <AccordionContent title={newsLetter.title}>
            <ATypography variant='body2' mt={2} mb={2}>
              {newsLetter.message}
            </ATypography>
            {newsLetter.collectEmail && <EmailForm />}
          </AccordionContent>
        </Grid>
      )}
    </Grid>
  )
}

Links.propTypes = {
  footerData: PropTypes.object
}

export default Links
