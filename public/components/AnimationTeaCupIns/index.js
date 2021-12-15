import APaper from 'components/shared/APaper'
import {Box} from '@mui/material'

const AnimationTeaCupIns = () => (
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
          bottom: -50,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 500,
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
          width: 280,
          height: 300,
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
            <Box component='span' style={{var: '--i'}} />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
            <Box component='span' />
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
            right: -70,
            top: 40,
            width: 160,
            height: 180,
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
export default AnimationTeaCupIns
