
import { Link } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import { useRef } from 'react';
export default function Contact() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
  }
  return (
    <body>
    <nav id='van'>
        <ul>
            <li class="logo"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9c8987108266725.5fba34b1ae05a.jpg" alt="" id='lo'></img></li>
            <li>
                <ul>
                <li><a href="/Main#bio" id='hyu'>BIO</a></li>
                   <Link to='/Main'> <li><a href="#header"id='hyu'>HOME</a></li></Link>
                   <Link to='/skils'> <li><a href="#skils" id='hyu'>SKILLS</a></li></Link>
                   <Link to='/field'> <li><a href="#contact" id='hyu'>FIELD OF INTEREST</a></li></Link>
                   <Link to='/contact'> <li><a href="#contact" id='hyu'>CONTACT</a></li></Link>
                       
                </ul>
            </li>
        </ul>

    </nav>
    <Container sx={{marginY:6}} >
     <Grid container spacing={1} id='con'>
      <Grid item xs={6} sm={6} md={10}>
      <section id="contact">
<h3>CONTACT</h3>
  <form ref={form} onSubmit={sendEmail}><input type="text" name="user_name" placeholder='ENTER YOUR NAME'/></form>
<form ref={form} onSubmit={sendEmail} id='form 2'><input type="text"name="user_name"placeholder='ENTER YOUR EMAIL'/></form>
<form ref={form} onSubmit={sendEmail}><input type="text" name="user_name"placeholder='ENTER YOR MESSAGE'/></form>
<Link to='/final'><button id ='sub'>submit</button></Link> 
<a href='https://github.com/karishmaag' target='_blank' id='c'>
             <h3>GITHUB: <i className='fa fa-github' id='git'></i></h3>
              </a>
              <a href='https://www.linkedin.com/in/karishmaa-gopinathan-33b255237' target='_blank' id='d'>
              <h3>LINKEDIN: <i className='fa fa-linkedin' id='lin'></i></h3>
              </a>
            <i class="bi bi-github"></i> 
            </section>
            </Grid>
            </Grid>
            </Container>
              
</body>
  )
}