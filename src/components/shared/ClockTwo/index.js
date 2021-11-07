import {Box} from '@mui/material'
import {useEffect, useState} from 'react'
import './styles.moudle.scss'

const getCurrentTimeRatateZ = () => {
  const deg = 6
  const day = new Date()
  const hh = day.getHours() * 30
  const mm = day.getMinutes() * deg
  const ss = day.getSeconds() * deg
  return {
    hrRotateZ: `rotateZ(${hh + mm / 12}deg)`,
    mnRotateZ: `rotateZ(${mm}deg)`,
    scRotateZ: `rotateZ(${ss}deg)`
  }
}

const ClockTwo = () => {
  const initRotateZ = getCurrentTimeRatateZ()
  const [hrTransform, setHRTransform] = useState(initRotateZ.hrRotateZ)
  const [mnTransform, setMNTransform] = useState(initRotateZ.mnRotateZ)
  const [scTransform, setSCTransform] = useState(initRotateZ.scRotateZ)

  useEffect(() => {
    const interval = setTimeout(() => {
      const {hrRotateZ, mnRotateZ, scRotateZ} = getCurrentTimeRatateZ()

      setHRTransform(hrRotateZ)
      setMNTransform(mnRotateZ)
      setSCTransform(scRotateZ)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <Box className='bg'>
      <Box className='container'>
        <Box className='box'>
          <Box className='clock'>
            <Box className='hour'>
              <Box className='hr' sx={{transform: hrTransform}} />
            </Box>
            <Box className='min'>
              <Box className='mn' sx={{transform: mnTransform}} />
            </Box>
            <Box className='sec'>
              <Box className='sc' sx={{transform: scTransform}} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ClockTwo
