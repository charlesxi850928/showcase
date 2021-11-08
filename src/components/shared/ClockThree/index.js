import {Box} from '@mui/material'
import {useEffect, useState} from 'react'
import './styles.scss'

const getCurrentTimeRotateZ = () => {
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

const ClockThree = () => {
  const initRotateZ = getCurrentTimeRotateZ()
  const [hrTransform, setHRTransform] = useState(initRotateZ.hrRotateZ)
  const [mnTransform, setMNTransform] = useState(initRotateZ.mnRotateZ)
  const [scTransform, setSCTransform] = useState(initRotateZ.scRotateZ)

  useEffect(() => {
    const interval = setTimeout(() => {
      const {hrRotateZ, mnRotateZ, scRotateZ} = getCurrentTimeRotateZ()

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
      <Box className='box'>
        <Box className='clock'>
          <Box className='nut' />
          <Box className='hour' sx={{transform: hrTransform}} />
          <Box className='min' sx={{transform: mnTransform}} />
          <Box className='sec' sx={{transform: scTransform}} />
          <Box className='mark mark-1' />
          <Box className='mark mark-2' />
          <Box className='mark mark-3' />
          <Box className='mark mark-4' />
          <Box className='mark mark-5' />
          <Box className='mark mark-6' />
          <Box className='mark mark-7' />
          <Box className='mark mark-8' />
          <Box className='mark mark-9' />
          <Box className='mark mark-10' />
          <Box className='mark mark-11' />
          <Box className='mark mark-12' />
        </Box>
      </Box>
    </Box>
  )
}

export default ClockThree
