import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import businessPersonality from './businessPersonality'
import Fade from '@mui/material/Fade'
function BussinessPersonalityForm ({ handleNext, handleBack }) {
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
          handleNext()
        }}
      >
        <Autocomplete
          disablePortal
          id='bussines-personality-1'
          options={businessPersonality}
          sx={{ width: 300, margin: 2 }}
          renderInput={params => (
            <TextField
              {...params}
              label='Business Primary Attribute'
              required
            />
          )}
        />
        <Autocomplete
          disablePortal
          id='bussines-Personality-2'
          options={businessPersonality}
          sx={{ width: 300, margin: 2 }}
          renderInput={params => (
            <TextField
              {...params}
              label='Business Secondary Attribute'
              required
            />
          )}
        />
        <TextField
          id='outlined-multiline-static'
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
