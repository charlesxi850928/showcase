import {Grid, Box} from '@mui/material'
import PropTypes from 'prop-types'
import ATypography from 'mui/ATypography'
import muiIconList from 'mui/IconList'
import Link from 'mui/Link'

const Address = ({address}) => (
  <Grid md={4} sm={12} item container alignItems='center' wrap='nowrap'>
    {address.icon ? (
      <img src={address.icon} height='35' width='35' alt='' />
    ) : (
      <muiIconList.Business fontSize='large' color='primary' />
    )}

    <ATypography ml={1} mr={2} variant='body2'>
      {address.text}
    </ATypography>
  </Grid>
)

Address.propTypes = {
  address: PropTypes.object
}

const Phone = ({phones}) => (
  <Grid md={4} sm={12} item container alignItems='center' wrap='nowrap'>
    {phones.icon ? (
      <img src={phones.icon} height='35' width='35' alt='' />
    ) : (
      <muiIconList.PhoneInTalk fontSize='large' color='primary' />
    )}

    <Box sx={{ml: 1}}>
      {phones.text.map((item) => (
        <ATypography w6 variant='body2' key={item.name}>
          {`${item.name}: `}
          <ATypography variant='body2' component='span'>
            {item.value}
          </ATypography>
        </ATypography>
      ))}
    </Box>
  </Grid>
)
Phone.propTypes = {
  phones: PropTypes.object
}

const Goverment = ({data}) => (
  <Grid md={4} sm={12} item container alignItems='center' wrap='nowrap'>
    <img src={data.logo} height='35' width='35' alt='' />
    <Link sx={{ml: 1}} href={data.link} color='inherit' underline='none'>
      <ATypography color='primary' w7 variant='body2'>
        {data.text}
      </ATypography>
    </Link>
  </Grid>
)
Goverment.propTypes = {
  data: PropTypes.object
}

const Contact = ({contactData}) => {
  const {address, phones, government} = contactData
  return (
    <Grid container sx={{pt: 2, pb: 2, justifyContent: 'center'}} spacing={2} component='section'>
      {address && <Address address={address} />}
      {phones && <Phone phones={phones} />}
      {government && <Goverment data={government} />}
    </Grid>
  )
}

Contact.propTypes = {
  contactData: PropTypes.object
}
export default Contact
