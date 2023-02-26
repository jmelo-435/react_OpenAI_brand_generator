import { Box } from '@mui/system'
import Fade from '@mui/material/Fade'
import Avatar from '@mui/material/Avatar'
import { Card } from '@mui/material'
import { Stack } from '@mui/system'
import { Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import { IconButton } from '@mui/material'
import { Tooltip } from '@mui/material'
import Icon from '@mui/material/Icon'
import image from './image.svg'
function About () {
  return (
    <Fade in>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        minHeight='80%'
        maxWidth={'400px'}
      >
        <Card
          sx={{
            padding: 2,
            minWidth: '90%'
          }}
        >
          <Stack direction='row' spacing={2} width={'90%'} justifyContent={'space-between'}>
            <Avatar
              src='https://lh3.googleusercontent.com/a/AGNmyxaoCDzPFvUi_CCphXfzzw87aMZF8dsUvQHn8Okccw=s83-c-mo'
              sx={{ width: 70, height: 70, margin: '5%', alignSelf:'center'}}
            />
            <Stack direction={'column'}>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                Developer
              </Typography>
              <Typography variant={'h5'}>Jeferson Melo</Typography>
              <Stack
                direction={'row'}
                spacing={2}
                marginTop={2}
                marginBottom={2}
                marginRight={2}
              >
                <Tooltip title={'Github Account'}>
                  <IconButton
                    aria-label='Github Account'
                    href='https://github.com/jmelo-435'
                  >
                    <GitHubIcon fontSize='large' htmlColor='black'/>
                  </IconButton>
                </Tooltip>
                <Tooltip title={'GetNinjas Account'}>
                  <IconButton
                    aria-label='GetNinjas Account'
                    href='https://www.getninjas.com.br/anuncios/design-e-tecnologia/aplicativos-para-celular-e-redes-sociais/design-e-tecnologia-jeferson-douglas-medeiros-melo?ref=internal&subdomain=www&utm_campaign=37830282&utm_medium=whatsapp&utm_source=getninjas'
                  >
                    <Icon fontSize='large'>
                      <img src={image} alt='Get Ninjas' />
                    </Icon>
                  </IconButton>
                </Tooltip>
                <Tooltip title={'Email'}>
                  <IconButton
                    aria-label='GetNinjas Account'
                    href='mailto:jefersonmedeiros000@gmail.com'
                  >
                    <EmailIcon fontSize='large' htmlColor='black'/>
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
          </Stack>
        </Card>
        <Typography
        fontSize={'1rem'}
        >
        <h2>About the project</h2> 
        <p>This is an App developed in React and Django that
        showcases the capabilities of the <a href = "https://openai.com/api/">GPT-3 Api</a>. It's deployed 
        using <a href='https://vercel.com/'>Vercel</a> for the Django back-end Api, and <a href='https://netlify.com/'>Netlify</a> for the 
        front-end React App. 
        </p>
        </Typography>
      </Box>
    </Fade>
  )
}

export default About
