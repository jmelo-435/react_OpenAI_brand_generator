import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import businessPersonality from './businessPersonality'
import Chip from '@mui/material/Chip'
import Fade from '@mui/material/Fade'
import { useState } from 'react'
function BussinessPersonalityForm ({ handleNext, handleBack,business,setBusinessData}) {
  const [personality, setPersonality] = useState([])
  return (
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
        onSubmit={() => {
          const description = document.getElementById('business-description').value
          const persona = personality
          let newBusiness = business
          newBusiness.atributes=persona
          newBusiness.description=description
          setBusinessData(prevState => ({ ...prevState, ...newBusiness }))

          handleNext()
        }}
      >
        <Autocomplete
          multiple
          sx={{ width: 300, margin: 2 }}
          id='personality'
          options={businessPersonality.map(option => option.label)}
          freeSolo
          onChange={(event,newValue)=>{setPersonality(newValue)}}
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
          rows={4}
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
