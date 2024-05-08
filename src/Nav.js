import React from 'react'
import './Nav.css'
import {useNavigate} from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  return (
    <div>
        <nav id="nav">
        <div>
        <img src="./assets/black.medium.png" alt="logo" className='logo'/>
        </div>
    <div>
        <ul className='nav-links'>
        <li><a href="#HOME">Home</a></li>
        <li><a href="#ABOUT">About</a></li>
        <li><a href="#AIM">Aim</a></li>
        <li><a href="#CONNECT">Connect with us</a></li>
        </ul>
    </div>
            <button class="btn-L" onClick={() => navigate('Login')}>Login</button>
            <button class="btn"   onClick={() => navigate('Signup')}>Sign up</button>
    </nav>
        <section id="HOME">
            <div class="home-content">
                <img src="./assets/Welcome-img.jpg" alt="" className='think-img' />
                <div class="Welcome-text" >
                    <h1>How do you feel?</h1>
                    <p>When you plan and cannot keep a prompt track of your goals and achievements.</p>
                </div>
            </div>
        </section>
        <section id="ABOUT">
            <h1>ABOUT US</h1>
                <div class="abt-content">
                    <p>
                        PLAN A is a tracking tool for reflection, planning and improvement. it helps in starting your day and rounding it off. keep track of your goals and activities with PLAN A , track activity progress, build a healthy routine and lts more...
                    </p>
                </div>
            <button class="btn-L">Read more </button>
            <div class="testimonies">
                <h2>TESTIMONIES</h2>
            </div>

        </section>
        <section id="AIM">
            <div class="news-content">
                <b>START TODAY AND GET THE CHANCE TO ACHIEVE THAT GOAL WITH THE HELP OF AMAZING TRACKERS</b>
                <img src="./assets/handsTogether.jpg" alt="" />
            </div>
        </section>

        <div id="CONNECT">
            <div class="con-content">
                <p>Get to be that champion TODAY with PLAN A</p>
                <button class="btn con-btn" >Explore guide </button>
                 <div class="news-end">
                    <p>Subscribe to our Newsletter today and get weekly remainders about goals, options and rewards.</p>
                 </div>
                 <button class="btn-L con-btn">Subcribe Now</button>
            </div>
            <footer>
                <p class="connect">CONNECT WITH US</p>
                <p>Telephone N0: (+234)91XXX23029</p>
                <p>Address : GRA Phase 3,Port Harcourt.</p>
                <p>Website: MyPlana.shop</p>

            </footer>
        </div>

    </div>
  )
}

export default Nav