import Paper from '@mui/material/Paper'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import GoogleFontLoader from 'react-google-font-loader'
import Tooltip from '@mui/material/Tooltip'
import CircularProgress from '@mui/material/CircularProgress'
import Snackbar from '@mui/material/Snackbar'
import { createBrand } from './repo/repo'
import { useState } from 'react'

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

function ErrorPlaceHolder ({ reset,setBrandData,business }) {
  const [loading, setLoading] = useState(false)
  async function retry () {
    setLoading(true)
    try{
      const response = await createBrand(business)
      console.log(response)
      setBrandData(response)
      setLoading(false)
    }
    catch{
      setBrandData(false)
      setLoading(false)
    }
  }
  return( 
    loading?<LoadingPlaceholder/>:
    <>
    <h1>We have a problem</h1>
    <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        margin={'2rem'}
        flexDirection='row'
      >
        <Button
          onClick={() => {
            reset()
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            retry()
          }}
          variant='contained'
        >
          Retry
        </Button>
      </Box>
    </>
  
  )
}

function ColorPallet ({ colorScheme }) {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = (event, reason) => {
    setOpen(false)
  }
  return (
    <Paper
      sx={{
        margin: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'space-around',
        width: '86%',
        height: '50px'
      }}
    >
      <Tooltip title={colorScheme[0]}>
        <Box
          sx={{
            width: '25%',
            backgroundColor: colorScheme[0],
            cursor: 'pointer'
          }}
          onClick={() => {
            navigator.clipboard.writeText(colorScheme[0])
            handleClick()
          }}
        />
      </Tooltip>
      <Tooltip title={colorScheme[1]}>
        <Box
          sx={{
            width: '25%',
            backgroundColor: colorScheme[1],
            cursor: 'pointer'
          }}
          onClick={() => {
            navigator.clipboard.writeText(colorScheme[1])
            handleClick()
          }}
        />
      </Tooltip>
      <Tooltip title={colorScheme[2]}>
        <Box
          sx={{
            width: '25%',
            backgroundColor: colorScheme[2],
            cursor: 'pointer'
          }}
          onClick={() => {
            navigator.clipboard.writeText(colorScheme[2])
            handleClick()
          }}
        />
      </Tooltip>
      <Tooltip title={colorScheme[3]}>
        <Box
          sx={{
            width: '25%',
            backgroundColor: colorScheme[3],
            cursor: 'pointer'
          }}
          onClick={() => {
            navigator.clipboard.writeText(colorScheme[3])
            handleClick()
          }}
        />
      </Tooltip>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message='Copied to clipboard'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Paper>
  )
}

function DataDisplay ({ data, reset,setBrandData,business }) {
  const [loading, setLoading] = useState(false)
  async function retry () {
    setLoading(true)
    try{
      const response = await createBrand(business)
      console.log(response)
      setBrandData(response)
      setLoading(false)
    }
    catch{
      setBrandData(false)
      setLoading(false)
    }
  }
  return (
    loading ? (<LoadingPlaceholder/>):(
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: data.font,
            weights: [400]
          }
        ]}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80%'
        }}
      >
        <h1
          style={{
            color: data.colorScheme[1],
            marginBottom: '0px',
            fontFamily: data.font
          }}
        >
          {data.name}-{data.acronym}
        </h1>
        <h3
          style={{
            color: data.colorScheme[0],
            fontSize: '15px',
            marginTop: '2px'
          }}
        >
          {data.slogan}
        </h3>
      </Box>
      <br></br>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          padding: 2
        }}
      >
        <h3 style={{ textAlign: 'left' }}>{data.description}</h3>
      </Paper>
      <ColorPallet colorScheme={data.colorScheme} />
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        margin={'2rem'}
        flexDirection='row'
      >
        <Button
          onClick={() => {
            reset()
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            retry()
          }}
          variant='contained'
        >
          Retry
        </Button>
      </Box>
    </>
    )
  )
}

function Conclusion ({ brandData, reset, setRetrying, handleBack,business }) {
  const [brandDataState,setBrandDataState]=useState(brandData)
  return (
    <Fade in>
      <Paper
        sx={{
          margin: 5,
          padding: 5,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '40%'
        }}
      >
        {!brandDataState ? (
          <ErrorPlaceHolder
            data={brandDataState}
            reset={reset}
            setBrandData={setBrandDataState}
            business={business} />
        ) : (
          <DataDisplay
            data={brandDataState}
            reset={reset}
            setBrandData={setBrandDataState}
            business={business}
          />
        )}
      </Paper>
    </Fade>
  )
}
export default Conclusion
