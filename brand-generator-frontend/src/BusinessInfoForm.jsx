import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import businessTypes from './businessTypes'
import businessKeywords from './businessKeywords'
import Chip from '@mui/material/Chip';
import Fade from '@mui/material/Fade'
import { useState } from 'react'
function BussinessInfoForm ({ handleNext,business,setBusinessData }) {
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
          const name = document.getElementById("business-name").value
          const type = document.getElementById("business-type").value
          const keys = keywords
          let newBusiness= business
          newBusiness.name = name
          newBusiness.keywords= keys
          newBusiness.type=type
          setBusinessData((prevState)=>({...prevState,...newBusiness}))

          handleNext()
        }}
      >
        <TextField
          label='Business Name'
          sx={{ width: 300, margin: 2 }}
          id='business-name'
          helperText="If you don't provide a name, we will create one for you."
        />
        <Autocomplete
          multiple
          sx={{ width: 300, margin: 2 }}
          id='keywords'
          options={businessKeywords.map(option => option.label)}
          freeSolo
          onChange={(event,newValue)=>{setKeywords(newValue)}}
          label={"Keywords"}
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
          id='business-type'
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
