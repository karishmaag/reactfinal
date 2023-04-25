import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid } from '@mui/material';
export default function Final() {
  return (
    <body>
    <Container sx={{marginY:5}} id='con4'>
     <Grid container spacing={5}>
      <Grid item xs={10} sm={10} md={10}><div id='f'>
      <h3 id='fin'>YOUR MEASSGE IS SEND</h3>
        <h3 id='fin2'>THANKYOU FOR VISITING MY PORTFOLIO</h3>
       <Link to='/' ><button id='b'>GO BACK</button></Link>
    </div></Grid>
    </Grid>
    </Container>
</body>
    
  )
}
