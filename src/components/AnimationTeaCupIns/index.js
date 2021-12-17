import APaper from 'components/shared/APaper'
import {Box} from '@mui/material'
import {useEffect, useState} from 'react'
import useDeviceView from 'hooks/useDeviceView'

const AnimationTeaCupIns = () => {
  const [deviceAdap, setDeviceAdap] = useState({
    plateW: 500,
    plateB: -50,
    cupW: 280,
    cupH: 300,
    handleW: 160,
    handleH: 180,
    handleR: -70,
    handleT: 40,
    vapourHeats: [1, 3, 5, 9, 2, 4, 6, 7, 10, 8, 20, 11, 12, 19, 17, 16, 13, 15, 14, 18]
  })
  const {isMobileUpView} = useDeviceView()
  useEffect(() => {
    if (isMobileUpView) {
      setDeviceAdap({
        plateW: 500,
        plateB: -50,
        cupW: 280,
        cupH: 300,
        handleW: 160,
        handleH: 180,
        handleR: -70,
        handleT: 40,
        vapourHeats: [1, 3, 5, 9, 2, 4, 6, 7, 10, 8, 20, 11, 12, 19, 17, 16, 13, 15, 14, 18]
      })
    } else {
      setDeviceAdap({
        plateW: 300,
        plateB: -25,
        cupW: 200,
        cupH: 250,
        handleW: 100,
        handleH: 120,
        handleR: -45,
        handleT: 25,
        vapourHeats: [1, 3, 5, 9, 2, 4, 6, 7, 10, 8]
      })
    }
  }, [isMobileUpView])
  return (
    <APaper sx={{background: '#607d8b', height: 600, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box
        className='container'
        sx={{
          position: 'relative',
          height: 400,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          className='plate'
          sx={{
            position: 'absolute',
            bottom: deviceAdap.plateB,
            left: '50%',
            transform: 'translateX(-50%)',
            width: deviceAdap.plateW,
            height: 200,
            background: 'linear-gradient(to right, #f9f9f9, #e7e7e7)',
            borderRadius: '50%',
            boxShadow: '0 35px 35px rgba(0,0,0,0.2)',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
              borderRadius: '50%',
              background: 'linear-gradient(to left, #f9f9f9,#e7e7e7)'
            },
            '&:after': {
              content: '""',
              position: 'absolute',
              top: 30,
              left: 30,
              right: 30,
              bottom: 30,
              background: 'radial-gradient(rgba(0,0,0,0.2) 25%, transparent, transparent)',
              borderRadius: '50%'
            }
          }}
        />
        <Box
          className='cup'
          sx={{
            position: 'absolute',
            width: deviceAdap.cupW,
            height: deviceAdap.cupH,
            background: 'linear-gradient(to right,#f9f9f9,#d9d9d9)',
            borderBottomLeftRadius: '45%',
            borderBottomRightRadius: '45%'
          }}
        >
          <Box
            className='top'
            sx={{
              position: 'absolute',
              width: '100%',
              height: 60,
              background: 'linear-gradient(to right, #f9f9f9, #d9d9d9)',
              top: -30,
              left: 0,
              borderRadius: '50%'
            }}
          >
            <Box
              className='vapour'
              sx={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                padding: '0 20px',
                '& span': {
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bottom: 50,
                  display: 'block',
                  margin: '0 2px 50px',
                  minWidth: 8,
                  height: 120,
                  background: '#fff',
                  borderRadius: '50%',
                  animation: 'animate 5s linear infinite',
                  filter: 'blur(8px)',
                  animationDelay: 'calc(var(--i) * -0.5s)'
                },
                '@keyframes animate': {
                  '0%': {
                    transform: 'translateY(0) scaleX(1)',
                    opacity: 0
                  },
                  '15%': {
                    opacity: 1
                  },
                  '50%': {
                    transform: 'translateY(-150px) scaleX(5)'
                  },
                  '95%': {
                    opacity: 0
                  },
                  '100%': {
                    transform: 'translateY(-300px) scaleX(10)'
                  }
                }
              }}
            >
              {deviceAdap.vapourHeats.map((idx) => (
                <Box component='span' key={idx} style={{'--i': `${idx}`}} />
              ))}
            </Box>
            <Box
              className='circle'
              sx={{
                position: 'absolute',
                width: 'calc(100% - 20px)',
                height: 50,
                background: 'linear-gradient(to left,#f9f9f9,#d9d9d9)',
                borderRadius: '50%',
                top: 5,
                left: 10,
                boxSizing: 'border-box',
                overflow: 'hidden'
              }}
            >
              <Box
                className='tea'
                sx={{
                  position: 'absolute',
                  top: 20,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(#c57e65,#e28462)',
                  borderRadius: '50%'
                }}
              />
            </Box>
          </Box>
          <Box
            className='handle'
            sx={{
              position: 'absolute',
              right: deviceAdap.handleR,
              top: deviceAdap.handleT,
              width: deviceAdap.handleW,
              height: deviceAdap.handleH,
              border: '25px solid #dcdcdc',
              borderLeft: '25px solid transparent',
              borderBottom: '25px solid transparent',
              borderRadius: '50%',
              transform: 'rotate(42deg)'
            }}
          />
        </Box>
      </Box>
    </APaper>
  )
}
export default AnimationTeaCupIns
