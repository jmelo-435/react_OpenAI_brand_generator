import Paper from '@mui/material/Paper'
import { Box } from '@mui/system'
import About from './About'
import { useState } from 'react'
import App from './App'
import { Chip } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';



function MainContainer () {
  const [content,setContent]=useState(false)
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
            padding: '2%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        }}
        >

        {content?<App />:<About/>}
        {
          content?<Chip
          label={"About"}
          icon={<InfoIcon/>}
          color="primary"
          clickable
          onClick={()=>{setContent(false)}}
          sx={{
            marginTop:"10%",
            alignSelf:"start"
            
          }}
          ></Chip>:<Chip
          label={"Back"}
          icon={<HomeIcon/>}
          color="primary"
          clickable
          onClick={()=>{setContent(true)}}
          sx={{
            marginTop:"10%",
            alignSelf:"start"
          }}
          ></Chip>
        }
      </Paper>
    </Box>
    </>
  )
}

export default MainContainer
