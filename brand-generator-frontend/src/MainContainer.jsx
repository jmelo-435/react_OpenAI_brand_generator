import Paper from '@mui/material/Paper'
import { Box } from '@mui/system'
import App from './App'

function MainContainer () {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifySelf:'flex-start',
        marginTop:'1%'
      }}
      >
        <h1
        style={{
            color: '#1976d2',
            marginTop: '0px'
          }}
        >Brand Generator</h1>
        <h3
          style={{
            color: 'grey',
            marginTop: '0px'
          }}
        >
          Get inspired righ now
        </h3>
      </Box>
    <Box
      sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: { xs: '100vh' }
        }}
        >
      <Paper
        sx={{
            margin: '1%',
            padding: '5%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        }}
        >
        <App />
      </Paper>
    </Box>
    </>
  )
}

export default MainContainer
