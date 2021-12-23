/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types'
import {Grid, Box, Button} from '@mui/material'
import Link from 'mui/Link'
import ATypography from '../../../mui/ATypography'
import styles from './index.module.scss'
import {getPublicPath} from '../../../utils/GeneralUtils'

const articalImageURL = getPublicPath('assets/images/home/topSpot_5.jpg')

const Articles = ({data}) => (
  <Grid container spacing={4} className={styles.root}>
    <Grid item md={6}>
      <Box sx={{backgroundImage: `url('${articalImageURL}')`}} className={styles.wrapper} />
      <ATypography variant='h4'>2021 campfire restrictions</ATypography>
      <Link href='#' color='inherit' underline='hover'>
        <ATypography component='h3'>
          Be ready if open flames, charcoal briquettes and campfires are prohibited this summer.
        </ATypography>
      </Link>
      <ATypography color='textSecondary' className={styles.articleSubtitle}>
        Jun 7, 2021
      </ATypography>
    </Grid>
    <Grid item md={6}>
      <ATypography variant='h2' className={styles.articleTitle}>
        Recent article’s
      </ATypography>
      {data.map((article) => (
        <div key={article.id}>
          <Link href='#' color='inherit' underline='hover'>
            <ATypography variant='h6' component='h3'>
              {article.title}
            </ATypography>
          </Link>
          <ATypography color='textSecondary' className={styles.articleSubtitle}>
            {article.date}
          </ATypography>
        </div>
      ))}

      <Button color='primary' variant='outlined' data-ref='read-all-articles-btn'>
        <ATypography>Read all articles</ATypography>
      </Button>
    </Grid>
  </Grid>
)

Articles.propTypes = {
  data: PropTypes.array
}

export default Articles
