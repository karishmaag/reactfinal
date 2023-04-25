import React from 'react'
import { Link } from 'react-router-dom'
export default function () {
   
  return (
    <body>
    <nav id='van'>
        <ul>
            <li class="logo"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9c8987108266725.5fba34b1ae05a.jpg" alt="" id='lo'></img></li>
            <li>
                <ul>
                   <Link to='/Main'> <li><a href="#header"id='hyu'>HOME</a></li></Link>
                   <Link to='/skils'> <li><a href="#skils" id='hyu'>SKILLS</a></li></Link>
                   <Link to='/field'> <li><a href="#contact" id='hyu'>FIELD OF INTEREST</a></li></Link>
                   <Link to='/contact'> <li><a href="#contact" id='hyu'>CONTACT</a></li></Link>
                   
                </ul>
            </li>
        </ul>

    </nav>
    <section id="port">
    <h3>PROJECTS :) WHICH I WANT TO WORK :)</h3>
    <div>
        <article>
            <img src='https://media.geeksforgeeks.org/wp-content/uploads/20221108115803/EnergyConservation2.png'alt="energy"></img>
            <h4>ENERGY CONSERVATION</h4>
            <p>Energy conservation is one of the most important need our future</p>

        </article>
        <article>
            <img src="https://imageio.forbes.com/specials-images/imageserve/61b2e75e25fd41e930e1cfc8/The-Five-Biggest-Space-Technology-Trends-for-2022/960x0.jpg?format=jpg&width=960" alt="space" class="space"></img>
            <h4>SPACE TECHNOLOGY</h4>
            <p>Space technology is one of the  important sector </p>
        </article>
        <article>
            <img src="https://edelweisspublications.com/edelweiss/upload/keyword_images/0210191136_editor.jpg" alt="hyperloop"></img>
            <h4>BIO MEDICAL TECHNOLOGY</h4>
            <p>Technology that makes us healthier</p>
        </article>
    </div>
</section>
</body>
  )
}
