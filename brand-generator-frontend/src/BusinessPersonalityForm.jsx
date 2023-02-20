import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import businessPersonality from './businessPersonality'
import Chip from '@mui/material/Chip'
import Fade from '@mui/material/Fade'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react'
import { createBrand } from './repo/repo'
function LoadingPlaceholder () {
  return (
    <Fade in>
      <Paper
        sx={{
          margin: 5,
          padding: 5,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          height: 200,
          width: 200,
          alignItems: 'center'
        }}
      >
        <CircularProgress />
      </Paper>
    </Fade>
  )
}
function BussinessPersonalityForm ({
  handleNext,
  handleBack,
  business,
  setBusinessData,
  setBrandData
}) {
  const [personality, setPersonality] = useState([])
  const [loading, setLoading] = useState(false)
  async function fetch (businessData) {
    setLoading(true)
    try{
      const response = await createBrand(businessData)
      console.log(response)
      setBrandData(response)
      setLoading(false)
      handleNext()
    }
    catch{
      setBrandData(false)
      setLoading(false)
      handleNext()
    }
    
  }
  return loading ? (
    <LoadingPlaceholder />
  ) : (
    <Fade in>
      <Paper
        sx={{
          margin: 5,
          padding: 5,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        component='form'
        onSubmit={async () => {
          const description = document.getElementById(
            'business-description'
          ).value
          const persona = personality
          let newBusiness = business
          newBusiness.atributes = persona
          newBusiness.description = description
          setBusinessData(newBusiness)
          await fetch(newBusiness)
        }}
      >
        <Autocomplete
          multiple
          sx={{ width: 300, margin: 2 }}
          id='personality'
          options={businessPersonality.map(option => option.label)}
          freeSolo
          getOptionDisabled={() => {
            return personality.length >= 4
          }}
          onChange={(event, newValue) => {
            setPersonality(newValue)
          }}
          label={'Personality'}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip label={option} {...getTagProps({ index })} />
            ))
          }
          renderInput={params => (
            <TextField
              {...params}
              label='Atributes'
              required={(() => {
                return personality.length === 0
              })()}
            />
          )}
        />
        <TextField
          id='business-description'
          label='Short Description'
          sx={{ width: 300, margin: 2 }}
          multiline
          inputProps={{ maxLength: 200 }}
          rows={4}
          helperText="If you don't provide a description, we will create one for you."
        />
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='100%'
          flexDirection='row'
        >
          <Button
            onClick={() => {
              handleBack()
            }}
          >
            Back
          </Button>
          <Button type='submit' variant='contained'>
            Submit
          </Button>
        </Box>
      </Paper>
    </Fade>
  )
}

export default BussinessPersonalityForm
