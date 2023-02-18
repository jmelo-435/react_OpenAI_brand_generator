import LoadingButton from '@mui/lab/LoadingButton'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { useState } from 'react'
import businessTypes from './businessTypes'
import businessKeywords from './businessKeywords'
function BussinessInfoForm () {
  const [loading, setLoading] = useState(false)

  return (
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
      <TextField
        id='outlined-multiline-static'
        label='Short Description'
        sx={{ width: 300, margin: 2 }}
        multiline
        rows={4}
      />
      <>
        <LoadingButton
          type='submit'
          variant='contained'
          loading={loading}
          onClick={() => {
            setLoading(!loading)
          }}
        >
          Submit
        </LoadingButton>
      </>
    </Paper>
  )
}

export default BussinessInfoForm
