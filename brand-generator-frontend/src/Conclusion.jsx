import Paper from '@mui/material/Paper'
import Fade from '@mui/material/Fade'

function ErrorPlaceHolder (){
  return(
  <h1>We have a problem</h1>
  )
}

function DataDisplay ({data}){
  return(
    <>
    <h1>{data.name}-{data.acronym}</h1>
    <h2>{data.slogan}</h2>
    <br></br>
    <h3>{data.description}</h3>
    <br></br>
    <h3>{data.font}</h3>

    </>

  )
}

function Conclusion ({ brandData }) {

  
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
      >
        {!brandData ?<ErrorPlaceHolder/>:<DataDisplay data={brandData}/>}
      </Paper>
    </Fade>
  )
}
export default Conclusion
