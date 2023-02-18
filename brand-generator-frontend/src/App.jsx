import Box from '@mui/material/Box'
import BussinessInfoForm from './BusinessInfoForm'
import BussinessPersonalityForm from './BusinessPersonalityForm'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Step from '@mui/material/Step'
import { useState } from 'react'

function App () {
  const steps = ['Bussines Branch', 'Bussines Personality', 'Create']
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      minHeight='100vh'
    >
      <Stepper activeStep={activeStep}>
        {steps.map(label => {
          const stepProps = {}
          const labelProps = {}
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {activeStep === 0 ? (
        <BussinessInfoForm  handleNext={handleNext}/>
      ) : activeStep === 1 ? (
        <BussinessPersonalityForm handleNext={handleNext} handleBack={handleBack}/>
      ) : (
        <></>
      )}
    </Box>
  )
}

export default App
