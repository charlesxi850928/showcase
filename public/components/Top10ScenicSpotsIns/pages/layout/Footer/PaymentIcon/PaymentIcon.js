/**
 * @file   : PaymentIcon.js
 * @author : yangping.meng (yangping.meng@AspiraConnect.com)
 * @date   : 8/26/2021, 2:29:51 PM
 */
import PropTypes from 'prop-types'
import {Box} from '@mui/material'
import {visuallyHidden} from '@mui/utils'
import ATypography from 'mui/ATypography'
import {useT} from 'i18n'
import muiIconList from '../../../../mui/IconList'

const getPaymentWaysName = (paymentData) => {
  const paymentWay = []
  Object.keys(paymentData).forEach((key) => {
    if (paymentData[key]) {
      paymentWay.push(key)
    }
  })
  return paymentWay.join(',')
}
const PaymentIcon = ({data}) => {
  const paymentWayName = getPaymentWaysName(data)
  const navToInsLabel = useT({k: 'Common.footer.payment_support_way', variables: {name: paymentWayName}})
  const iconStyle = {
    mr: 2
  }
  return (
    <Box
      alignItems='center'
      justifyContent='space-between'
      display='flex'
      sx={{mb: 2, mt: 2, justifyContent: {xs: 'flex-start', md: 'space-between'}}}
    >
      <ATypography sx={visuallyHidden}>{navToInsLabel}</ATypography>
      {data.mastercard && <muiIconList.MasterCard sx={iconStyle} />}
      {data.visa && <muiIconList.VisaCard sx={iconStyle} />}
      {data.paypal && <muiIconList.PaypalCard sx={iconStyle} />}
      {data.discover && <muiIconList.DiscoverCard sx={iconStyle} />}
    </Box>
  )
}

PaymentIcon.propTypes = {
  data: PropTypes.object
}

export default PaymentIcon
