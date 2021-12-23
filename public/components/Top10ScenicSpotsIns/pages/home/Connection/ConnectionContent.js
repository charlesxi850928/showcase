import {Box} from '@mui/material'
import PropTypes from 'prop-types'
import ConnectionItem from './ConnectionItem'
import ScrollWrapper from '../../shared/Scroll/ScrollWrapper'
import styles from './index.module.scss'

const ConnectionContent = ({data}) => (
  <ScrollWrapper
    elementWidth={320}
    showSideButton
    buttonStyles={{
      common: {
        variant: 'text',
        color: 'inherit'
      },
      left: {className: [styles.scrollButtons, styles.leftButton].join(' ')},
      right: {className: [styles.scrollButtons, styles.rightButton].join(' ')}
    }}
  >
    {data.map((info) => (
      <Box className={styles.itemWrapper} key={info.description}>
        <ConnectionItem info={info} />
      </Box>
    ))}
  </ScrollWrapper>
)

ConnectionContent.propTypes = {
  data: PropTypes.array
}

export default ConnectionContent
