import { Container, Grid } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
export default function Skills() {
  return (
    <body>
    <nav id='van' >
        <ul>
            <li class="logo" ><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9c8987108266725.5fba34b1ae05a.jpg" alt="" id='lo'></img></li>
            <li>
                <ul>
                   <Link to='/Main'> <li ><a href="#header" id='hyu'>HOME</a></li></Link>
                   <Link to='/skils'> <li><a href="#skils"id='hyu'>SKILLS</a></li></Link>
                   <Link to='/field'> <li><a href="#contact" id='hyu'>FIELD OF INTEREST</a></li></Link>
                   <Link to='/contact'> <li><a href="#contact"id='hyu'>CONTACT</a></li></Link>
                </ul>
            </li>
        </ul>

    </nav>
    <section id="skils">
    <h3 id='s'>SKILLS</h3>
    <div class="skill-set">
     <div>
     <Container sx={{marginY:10}} id='con'>
        <Grid item xs={12} sm={6} md={3}>
    <h4 id='tech'>TECHNICAL SKILLS</h4>
       <div>
        <ul>
            <li>JAVA</li>
            <li><progress max="100" value="80"></progress></li>
            <li>C PROGRAMMING</li>
            <li><progress max="100" value="90"></progress></li>
            <li>HTML,CSS,REACT</li>
            <li><progress max="100" value="90"></progress></li>
        </ul>
    </div>
    </Grid>
    </Container>
</div>
    <div>
    <Container sx={{marginY:10}} id='con2'>
        <Grid>
        <h4 id='tech'>LANGUAGE SKILLS</h4>
        <ul>
            <li>TAMIL</li>
            <li><progress max="100" value="100"></progress></li>
            <li> ENGLISH</li>
            <li><progress max="100" value="90"></progress></li>
            <li>FRENCH</li>
            <li><progress max="100" value="80"></progress></li>
        </ul>
        </Grid>
        </Container>
    </div>
   
   
    </div>
</section>
</body>
  )
}
