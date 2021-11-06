/* eslint-disable no-unused-vars */
import {Grid} from '@mui/material'
import PropTypes from 'prop-types'
import ACard from 'components/shared/ACard'

const Cards = ({
  sx,
  itemSx,
  rowSpacing = '1rem',
  columnSpacing = '1rem',
  xs = 6,
  md = 4,
  lg = 3,
  cardInfoList,
  handleCardClick
}) => (
  <Grid {...sx} rowSpacing={rowSpacing} columnSpacing={columnSpacing} container>
    {cardInfoList?.map((cardInfo) => (
      <Grid {...itemSx} xs={xs} md={md} lg={lg} item>
        <ACard cardInfo={cardInfo} key={cardInfo.id} handleCardClick={handleCardClick} />
      </Grid>
    ))}
  </Grid>
)

Cards.propTypes = {
  xs: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  cardInfoList: PropTypes.array.isRequired,
  handleCardClick: PropTypes.func,
  sx: PropTypes.object,
  itemSx: PropTypes.object,
  rowSpacing: PropTypes.object,
  columnSpacing: PropTypes.object
}

export default Cards
