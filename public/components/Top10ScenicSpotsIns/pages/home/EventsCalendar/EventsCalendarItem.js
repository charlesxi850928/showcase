import PropTypes from 'prop-types'

import {Button, Grid, Paper} from '@mui/material'
import ATypography from '../../../mui/ATypography'
import styles from './index.module.scss'

const EventsCalendarItem = ({itemDetails}) => {
  const {title, type, description, date} = itemDetails
  return (
    <Paper elevation={2} className={styles.itemWrapper}>
      <Grid container className={styles.gridWrapper}>
        <Grid item xs={12} sm={2} className={styles.dateWrapper}>
          <Button
            variant='contained'
            data-ref={`${title}-btn`}
            sx={{
              width: 1 / 1,
              borderRadius: {md: '0.4rem 0rem 0rem 0.4rem', xs: '0.4rem 0.4rem 0rem 0rem'},
              display: 'flex',
              flexDirection: 'column'
            }}
            aria-label={`${date.month} ${date.day}`}
          >
            <ATypography variant='subtitle0'>{date.day}</ATypography>
            <ATypography>{date.month}</ATypography>
          </Button>
        </Grid>

        <Grid item xs={12} sm={10} sx={{p: 2, '& h3': {mx: 0, my: 0.25}}}>
          <ATypography variant='body2'>{type}</ATypography>
          <ATypography w7 variant='h6' component='h3'>
            {title}
          </ATypography>
          <ATypography>{description}</ATypography>
        </Grid>
      </Grid>
    </Paper>
  )
}

EventsCalendarItem.propTypes = {
  itemDetails: PropTypes.object
}
export default EventsCalendarItem
