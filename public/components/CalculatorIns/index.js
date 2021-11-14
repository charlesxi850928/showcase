import Calculator from 'components/shared/Calculator'
import APaper from 'components/shared/APaper'
import FullScreenDialog from 'components/shared/FullScreenDialog'
import {Button, Typography} from '@mui/material'
import {useState} from 'react'
import useDeviceView from 'hooks/useDeviceView'

const CalculatorIns = () => {
  const [openCalculator, setOpenCalculator] = useState(true)
  const {isDesktopDownView} = useDeviceView()
  return (
    <APaper>
      <Button onClick={() => setOpenCalculator(true)}>
        <Typography>Open Calculator</Typography>
      </Button>
      <FullScreenDialog
        name='calculator'
        openDialog={openCalculator}
        setOpenDialog={setOpenCalculator}
        paperPropsSX={{
          backgroundColor: '#e0e5ed',
          '& .calculator': isDesktopDownView
            ? {
                width: '325px',
                height: '325px'
              }
            : {}
        }}
      >
        <Calculator />
      </FullScreenDialog>
    </APaper>
  )
}

export default CalculatorIns
