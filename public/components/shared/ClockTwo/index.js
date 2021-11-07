import {Box} from '@mui/material'
import {useEffect, useState} from 'react'
import './styles.moudle.scss'

const getCurrentTime = () => {
  const day = new Date()
  let hh = day.getHours()
  hh = hh < 10 ? `0${hh}` : hh
  let mm = day.getMinutes()
  mm = mm < 10 ? `0${mm}` : mm
  let ss = day.getSeconds()
  ss = ss < 10 ? `0${ss}` : ss
  return `${hh}:${mm}:${ss}`
}

const getDotDeg = () => {
  const day = new Date()
  const ss = day.getSeconds()
  return 45 + ss * 6
}

const ClockTwo = () => {
  const initTime = getCurrentTime()
  const [time, setTime] = useState(initTime)
  const initDot = getDotDeg()
  const [dot, setDot] = useState(initDot)

  useEffect(() => {
    const interval = setTimeout(() => {
      const newTime = getCurrentTime()
      setTime(newTime)
      const newDot = getDotDeg()
      setDot(newDot)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <Box className='bg'>
      <Box className='container'>
        <Box className='box'>
          <Box className='container'>
            <Box className='clock-container' />
            <Box className='clock'>
              <Box className='time'>{time}</Box>
              <Box className='dot' sx={{transform: `rotateZ(${dot}deg)`}} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ClockTwo
