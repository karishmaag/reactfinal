import React from 'react'
import { Link } from 'react-router-dom'
export default function () {
  return (
<body>
<nav >
        <ul>
            <li class="logo"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9c8987108266725.5fba34b1ae05a.jpg" alt=""></img></li>
            <li>
                <ul>
                   <Link to='/'> <li><a href="#header">HOME</a></li></Link>
                    <li><a href="#bio">BIO</a></li>
                   <Link to='/skils'> <li><a href="#skils">SKILLS</a></li></Link>
                   <Link to='/field'> <li><a href="#contact">FIELD OF INTEREST</a></li></Link>
                   <Link to='/contact'> <li><a href="#contact">CONTACT</a></li></Link>
                </ul>
            </li>
        </ul>

    </nav>
    <div id="header">
        <p>
        MY PRINCIPLE
        </p>
        <h1>:NEVER GIVE UP/:\UNTIL U WIN THE RACE:</h1>
    </div>
    <section>
        <div id="bio">
        <img src="https://i.pinimg.com/236x/f9/05/29/f90529a4d1b3b14e348faf6ca79f3561.jpg"  alt="photo" class="profile"></img>
        <article>
            <h2>KARISHMAA</h2>
            <p>I am karishmaa.I am from paramakudi which is located in ramanathapuram district.I have completed my schooling at Don bosco matric higher secondary school in paramakudi.
               I am pursing my B.E degree in electronics and communication engineering at sri krishna college of engineering an technology in coimbatore.
               it is really a wonderful experince to learn at sri krishna.It gave a clear cut view about my life.one more thing that i gave me wonderful
               set of friends for my lifetime. My goal is to get placed in a very good company with good salary package. I want to life my life independently
               and want to help my parents financially.
            </p>
            <p>
                Eventhough i belong to circuit branch.I turned towards coding.It is really a wonderful experience to learn coading.
                now i am having my traning on html learning. 
            </p>
            <p>
                I am really super exited to learn this language.It is really very crazy to work on this.I got a key to find my future career as a coder.
            </p>
        </article>
        </div>
    </section>
<footer id='foot'>

</footer >
</body>
  )
}
