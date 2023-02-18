import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import Fade from '@mui/material/Fade'

function LoadingPlaceholder () {
  return (
    <Stack spacing={2}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant='text' sx={{ fontSize: '3rem', width: 400 }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant='circular' width={200} height={200} />
      <Skeleton variant='rectangular' width={400} height={40} />
      <Skeleton variant='rounded' width={400} height={200} />
    </Stack>
  )
}

function Conclusion ({ brandData }) {
  const [loading, setLoading] = useState(true)

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
        {loading ? <LoadingPlaceholder></LoadingPlaceholder> : <></>}
      </Paper>
    </Fade>
  )
}
export default Conclusion
