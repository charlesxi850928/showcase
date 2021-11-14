import {Grid, Box} from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'
import {useState} from 'react'
import SentimentVeryDissatisfiedSharpIcon from '@mui/icons-material/SentimentVeryDissatisfiedSharp'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import SentimentVerySatisfiedSharpIcon from '@mui/icons-material/SentimentVerySatisfiedSharp'

import PropTypes from 'prop-types'

const Stars = ({selected, rating, setScore, setRatingStatus}) => {
  const handleStarClick = (flag) => {
    let newRating = rating
    if (flag === '-') {
      newRating -= 1
    }
    const translateX = -(newRating * 40)
    setRatingStatus({transform: `translateX(${translateX}px)`})
    setScore(newRating)
  }
  return (
    <Box sx={{cursor: 'pointer'}}>
      <StarBorderIcon
        fontSize='large'
        sx={{display: !selected ? 'block' : 'none', color: 'dimgray'}}
        onClick={() => handleStarClick('+')}
      />
      <StarIcon
        fontSize='large'
        sx={{display: selected ? 'block' : 'none', color: 'dimgray'}}
        onClick={() => handleStarClick('-')}
      />
    </Box>
  )
}

Stars.propTypes = {
  selected: PropTypes.bool,
  rating: PropTypes.number,
  setScore: PropTypes.func,
  setRatingStatus: PropTypes.func
}

const Rating = () => {
  const [ratingStatus, setRatingStatus] = useState({transform: 'translateX(0px)'})
  const [score, setScore] = useState(0)
  return (
    <Grid display='flex' direction='column' justifyContent='center' alignItems='center'>
      <Grid
        display='flex'
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={{backgroundColor: 'white', padding: '1.5rem 3.5rem', borderRadius: '0.25rem'}}
      >
        <Grid
          sx={{
            paddingY: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            borderWidth: '0.125rem',
            overflow: 'hidden',
            '& svg': {
              color: '#af2626',
              width: '2.5rem',
              height: '2.5rem'
            }
          }}
        >
          <Grid display='flex' sx={{width: '2.5rem', height: '2.5rem', transition: '.5s', ...ratingStatus}}>
            <SentimentVeryDissatisfiedSharpIcon />
            <SentimentVeryDissatisfiedIcon />
            <SentimentDissatisfiedIcon />
            <SentimentSatisfiedIcon />
            <SentimentVerySatisfiedIcon />
            <SentimentVerySatisfiedSharpIcon />
          </Grid>
        </Grid>
        <Grid display='flex' justifyContent='center' alignItems='center'>
          {[1, 2, 3, 4, 5].map((rating) => {
            const selected = rating <= score
            return (
              <Stars
                key={rating}
                selected={selected}
                rating={rating}
                setRatingStatus={setRatingStatus}
                setScore={setScore}
              />
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Rating
