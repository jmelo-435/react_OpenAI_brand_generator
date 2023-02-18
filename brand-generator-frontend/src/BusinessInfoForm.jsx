import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import businessTypes from './businessTypes'
import businessKeywords from './businessKeywords'
import Chip from '@mui/material/Chip';
import Fade from '@mui/material/Fade'
import { useState } from 'react'
function BussinessInfoForm ({ handleNext }) {
  const [keywords,setKeywords]=useState([])
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
          multiple
          sx={{ width: 300, margin: 2 }}
          id='keywords'
          options={businessKeywords.map(option => option.label)}
          freeSolo
          onChange={(e)=>{setKeywords(e.target.value)}}
          label={"Names"}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={params => (
            <TextField
              {...params}
              label='Keywords'
              required={(()=>{return keywords.length ===0})()}

            />
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
