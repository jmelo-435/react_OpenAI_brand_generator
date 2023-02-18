import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import businessTypes from './businessTypes'
import businessKeywords from './businessKeywords'
import Fade from '@mui/material/Fade'
function BussinessInfoForm ({ handleNext }) {
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
        <TextField
          label='Business Name'
          sx={{ width: 300, margin: 2 }}
          id='bussiness-name'
        />
        <Autocomplete
          disablePortal
          id='bussines-keyword-1'
          options={businessKeywords}
          sx={{ width: 300, margin: 2 }}
          renderInput={params => (
            <TextField {...params} label='Business Keyword 1' required />
          )}
        />
        <Autocomplete
          disablePortal
          id='bussines-keyword-2'
          options={businessKeywords}
          sx={{ width: 300, margin: 2 }}
          renderInput={params => (
            <TextField {...params} label='Business Keyword 2' required />
          )}
        />
        <Autocomplete
          disablePortal
          id='bussines-type'
          options={businessTypes}
          sx={{ width: 300, margin: 2 }}
          renderInput={params => (
            <TextField {...params} label='Business Type' required />
          )}
        />

        <>
          <Button type='submit' variant='contained'>
            Next
          </Button>
        </>
      </Paper>
    </Fade>
  )
}

export default BussinessInfoForm
