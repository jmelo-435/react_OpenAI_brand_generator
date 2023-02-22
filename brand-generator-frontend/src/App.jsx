import Box from '@mui/material/Box'
import BussinessInfoForm from './BusinessInfoForm'
import BussinessPersonalityForm from './BusinessPersonalityForm'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Step from '@mui/material/Step'
import Conclusion from './Conclusion'
import { useState, useEffect } from 'react'
import business from './models/business'

function App () {
  const steps = ['Bussines Branch', 'Bussines Personality', 'Result']
  const [activeStep, setActiveStep] = useState(0)
  const [businessData, setBusinessData] = useState(business)
  const [brandData, setBrandData] = useState()
  const [retrying, setRetrying] = useState(false)

  useEffect(() => {
    console.log(JSON.stringify(businessData))
  }, [businessData])
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  const handleReset = () => {
    setActiveStep(0)
  }
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      minHeight='80%'
      maxWidth='80%'
    >
      <Stepper activeStep={activeStep} sx={{
        fontSize:{xs:'0.7rem'}
      }}>
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
        <BussinessInfoForm
          handleNext={handleNext}
          business={businessData}
          setBusinessData={setBusinessData}
        />
      ) : activeStep === 1 ? (
        <BussinessPersonalityForm
          handleNext={handleNext}
          handleBack={handleBack}
          business={businessData}
          setBusinessData={setBusinessData}
          setBrandData={setBrandData}
          setRetrying={setRetrying}
          retrying={retrying}
        />
      ) : (
        <Conclusion
          brandData={brandData}
          reset={handleReset}
          handleBack={handleBack}
          setRetrying={setRetrying}
          business={businessData}
        />
      )}
    </Box>
  )
}

export default App
