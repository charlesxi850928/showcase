/* eslint-disable jsx-a11y/media-has-caption */
import {Paper, Button, Grid} from '@mui/material'
import PropTypes from 'prop-types'
import ATypography from '../../../mui/ATypography'
import styles from './index.module.scss'
import EventsCalendarItem from './EventsCalendarItem'

const Recommendation = ({data}) => (
  <Grid container spacing={2} mt={2} mb={2}>
    <Grid item lg={6} xs={12}>
      <Paper elevation={3} className={styles.eventsWrapper}>
        <ATypography variant='h2' component='h2'>
          Events calendar
        </ATypography>
        <EventsCalendarItem itemDetails={data[0]} />
        <EventsCalendarItem itemDetails={data[1]} />
        <Button variant='outlined' color='primary' data-ref='view-all-events-btn'>
          <ATypography>View all events</ATypography>
        </Button>
      </Paper>
    </Grid>
    <Grid item lg={6} xs={12}>
      <video height='330' controls='controls' width='100%' preload='none'>
        <source
          src='https://crowdriff-video-upload.s3.amazonaws.com/standard/f0071e47-7ad3-40af-9f49-62fd0e91d551.mp4#t=6'
          type='video/mp4'
        />
        <track src='subtitles.vtt' kind='captions' srcLang='en' label='English' />
      </video>
    </Grid>
  </Grid>
)

Recommendation.propTypes = {
  data: PropTypes.array
}

export default Recommendation
