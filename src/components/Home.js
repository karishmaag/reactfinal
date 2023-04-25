import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {

  return (
    <body>
    <div id='div1'>
      
        <h1 id='heading'>WELCOME TO MY PORTFOLIO</h1>
        <Link to="/Main"> <button id='button'><h4 id='hd2'>LET'S GET STARTED</h4></button> </Link>
       
    </div>
        <img src='https://t3.ftcdn.net/jpg/03/67/13/74/360_F_367137425_g31biEUjWffxLRph0gMAopequjwSActg.jpg' id='image'></img>
    </body>
  )
}
