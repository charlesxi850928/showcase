import {Box, Typography} from '@mui/material'

const Loader = () => {
  console.log('....')
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box
        className='loader'
        sx={{
          position: 'relative',
          display: 'flex',
          animation: 'changeColor 5s linear infinite',
          '@keyframes changeColor': {
            '0%': {
              filter: 'hue-rotate(0deg)'
            },
            '100%': {
              filter: 'hue-rotate(360deg)'
            }
          },
          '& .dot': {
            position: 'relative',
            width: 10,
            height: 10,
            background: '#00ff0a',
            boxShadow:
              '0 0 10px #00ff0a, 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a, 0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 100px #00ff0a',
            margin: '5px 5px',
            borderRadius: '50%',
            transform: 'scale(0.1)',
            animation: 'animationDot 2s linear infinite',
            animationDelay: 'calc(var(--i) * 0.1s)'
          },
          '@keyframes animationDot': {
            '0%,50%,100%': {
              transform: 'scale(0.5)'
            },
            '10%': {
              transform: 'scale(1)'
            }
          }
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => (
          <Box className='dot' style={{'--i': idx}} />
        ))}
        <Typography component='h1'>Loading...</Typography>
      </Box>
    </Box>
  )
}

export default Loader
