import React from 'react'
import './Home.css'
import hero from '../pic/hero.png'
import skill1 from '../pic/skill1.png'
import skill2 from '../pic/skill2.png'
import skill3 from '../pic/skill3.png'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Madanlal Bidiyasar</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[' Professional Coder.', ' Developer.']}
                  loop
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
