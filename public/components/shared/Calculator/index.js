import {Grid, Box, Button, Typography} from '@mui/material'
import {useState} from 'react'

const calc = (displayValue, val, result) => {
  let newDisplayValue = displayValue
  let newResult = result
  if (newDisplayValue === '0' && val === '.') {
    newDisplayValue = '0.'
  } else {
    if (newDisplayValue === '0') {
      newDisplayValue = ''
    }
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(val) || val === '.') {
      if (newDisplayValue.indexOf('.') > -1) {
        if (val !== '.') {
          newDisplayValue = (newDisplayValue + val).toString()
        }
      } else {
        newDisplayValue = (newDisplayValue + val).toString()
      }
    } else if (val !== '=') {
      newResult[newResult.length] = newDisplayValue
      newResult[newResult.length] = val
      newDisplayValue = (newDisplayValue + val).toString()
    } else {
      newResult[newResult.length] = newDisplayValue
      try {
        // eslint-disable-next-line no-eval
        newDisplayValue = eval(newResult[2])
          .toFixed(12)
          .toString()
          // Remove 0 after .
          .replace(/(?:\.0*|(\.\d+?)0+)$/, '$1')
      } catch (e) {
        newDisplayValue = displayValue
      }
      newResult = []
    }
  }
  return {
    result: newResult,
    displayValue: newDisplayValue
  }
}

const Calculator = () => {
  const [result, setResult] = useState([])
  const [displayValue, setDisplayValue] = useState('')
  const handleACDELKeyClick = (val) => {
    if (val === 'AC') {
      setResult([])
      setDisplayValue('0')
    } else {
      setDisplayValue(displayValue.substring(0, displayValue.length - 1))
    }
  }
  const handleNormalKeyClick = (val) => {
    if (displayValue.length > 30) {
      return
    }
    const displayValueLastChar = displayValue.substring(displayValue.length - 1)
    if (
      (val === '%' || val === '+' || val === '-' || val === '*' || val === '/') &&
      result &&
      (displayValueLastChar === '%' ||
        displayValueLastChar === '+' ||
        displayValueLastChar === '-' ||
        displayValueLastChar === '*' ||
        displayValueLastChar === '/')
    ) {
      return
    }
    let newResult = result
    let newDisplayValue = displayValue
    if (
      displayValue !== '0' &&
      (val === '%' || val === '+' || val === '-' || val === '*' || val === '/') &&
      (displayValue.lastIndexOf('%') > -1 ||
        displayValue.lastIndexOf('+') > -1 ||
        displayValue.lastIndexOf('-') > -1 ||
        displayValue.lastIndexOf('*') > -1 ||
        displayValue.lastIndexOf('/') > -1)
    ) {
      const calcResult = calc(displayValue, '=', result)
      newResult = calcResult.result
      newDisplayValue = calcResult.displayValue
    }
    const calcResult = calc(newDisplayValue, val, newResult)
    setResult(calcResult.result)
    setDisplayValue(calcResult.displayValue)
  }
  return (
    <Grid className='calculator'>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          fontSize: '2rem',
          fontWeight: 600,
          borderRadius: '0.5rem',
          padding: '1rem',
          background: 'silver',
          margin: {xs: '0.5rem 0.5rem', md: '0.5rem 0'},
          minHeight: '5rem',
          overflow: 'hidden',
          wordBreak: 'break-all'
        }}
      >
        <Box>{displayValue}</Box>
      </Grid>
      <Grid
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 60px)',
          gridTemplateRows: '120px, repeat(5, 60px)',
          justifyContent: 'center',
          alignContent: 'end',
          gap: '20px',
          '& .btn': {
            outline: 'none',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(145deg, #f0f5fe, #caced5)',
            boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff',
            '&:hover': {
              background: 'linear-gradient(145deg, #caced5, #f0f5fe)',
              boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff'
            }
          },
          '& .btn_click': {
            outline: 'none',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(145deg, #f0f5fe, #caced5)',
            boxShadow: '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff',
            '&:hover': {
              background: 'linear-gradient(145deg, #caced5, #f0f5fe)',
              boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff'
            }
          },
          '& .btn0': {
            width: '140px',
            height: '60px',
            borderRadius: '30px',
            gridColumnStart: 1,
            gridColumnEnd: 3,
            '&:hover': {
              background: 'linear-gradient(145deg, #caced5, #f0f5fe)',
              boxShadow: '6px 6px 12px #bec3c9, -6px -6px 12px #ffffff'
            }
          },
          '& .btn1': {
            color: '#ff9900'
          },
          '& .txt': {
            marginBottom: '20px',
            gridColumnStart: 1,
            gridColumnEnd: 5,
            border: 'none',
            outline: 'none',
            height: '60px',
            borderRadius: '10px',
            background: '#e0e5ed',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            fontSize: '48px'
          }
        }}
      >
        {[
          {val: 'AC', className: 'btn1 btn_click', func: handleACDELKeyClick},
          {val: 'DEL', className: 'btn1 btn_click', func: handleACDELKeyClick},
          {val: '%', className: 'btn btn1', func: handleNormalKeyClick},
          {val: '+', className: 'btn btn1', func: handleNormalKeyClick},
          {val: '7', className: 'btn', func: handleNormalKeyClick},
          {val: '8', className: 'btn', func: handleNormalKeyClick},
          {val: '9', className: 'btn', func: handleNormalKeyClick},
          {val: '-', className: 'btn btn1', func: handleNormalKeyClick},
          {val: '4', className: 'btn', func: handleNormalKeyClick},
          {val: '5', className: 'btn', func: handleNormalKeyClick},
          {val: '6', className: 'btn', func: handleNormalKeyClick},
          {val: '*', className: 'btn btn1', func: handleNormalKeyClick},
          {val: '1', className: 'btn btn1', func: handleNormalKeyClick},
          {val: '2', className: 'btn', func: handleNormalKeyClick},
          {val: '3', className: 'btn', func: handleNormalKeyClick},
          {val: '/', className: 'btn btn1', func: handleNormalKeyClick},
          {val: '0', className: 'btn btn0', func: handleNormalKeyClick},
          {val: '.', className: 'btn', func: handleNormalKeyClick},
          {val: '=', className: 'btn btn1', func: handleNormalKeyClick}
        ].map((key, index) => (
          <Button
            className={key.className}
            key={key.val}
            data-ref={`${index}_${key.val}`}
            onClick={() => key.func(key.val)}
          >
            <Typography fontSize='1.5rem'>{key.val}</Typography>
          </Button>
        ))}
      </Grid>
    </Grid>
  )
}

export default Calculator
