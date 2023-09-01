import './style.css'
import {
  Grid,
  GridItem,
  Image,
  Box,
  Input,
  Stack
} from '@chakra-ui/react'

const App = () => {


  return (
    <>
      <Grid
        templateAreas={`
                  "nav main"`}
        gridTemplateColumns={'1fr 120vh'}
        h='100vh'
      >
        <GridItem area={'nav'} className='nav'>
          <form action="" id="form" class="form">
            <img src="public\EN-EP7-Logo@2x-.png" alt="" />
            <Stack spacing="3rem" align="center">
              <Input
              type='email'
              placeholder='E-mail' 
              size='lg'
              color= "#F45A25"
              focusBorderColor= "#F45A25"
              font-size= "20px"
              letter-spacing= '2px'
              width="150%"
              required 
              />
              <Input 
              type='password'
              placeholder='Password' 
              size='lg'
              color= "#F45A25"
              focusBorderColor= "#F45A25"
              font-size= "20px"
              letter-spacing= '2px'
              width="150%"
              required />
            </Stack>
            <button className="button" type="submit">Log in</button>
          </form>
        </GridItem>
        <GridItem area={'main'} className='main'>
          <Box boxSize=''>
            <Image
              src='public\DTUC33H.jpg'
              alt='banner'
              width="120vh"
              height="100vh"
              objectFit='cover' />
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
