/* eslint-disable jsx-a11y/anchor-is-valid */
import APaper from 'components/shared/APaper'
import {Box, Link, Typography} from '@mui/material'
import './styles.scss'

const CardHoverIns = () => (
  <APaper>
    <Box className='cardHover'>
      <Box className='card'>
        <Box className='circle' />
        <Box className='content'>
          <Typography component='h2'>Pepsi Cola</Typography>
          <Typography>
            PepsiCo, Inc., American food and beverage company that is one of the largest in the world, with products
            available in more than 200 countries. It took its name in 1965 when the Pepsi-Cola Company merged with
            Frito-Lay, Inc. The company’s headquarters are in Purchase, New York.
          </Typography>
          <Link href='#'>Buy Now</Link>
        </Box>
        <img src='assets/images/card-hover/kl.png' alt='Pepsi Cola' />
      </Box>
    </Box>
  </APaper>
)

export default CardHoverIns
