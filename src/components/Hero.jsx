import React from 'react'
import {logo} from '../assets'; 
function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className="w-full flex justify-between items-center flex-row mb-10 pt-10"> 
            <img src={logo} alt="Sumz-logo" className='w-28 object-contain'/>
            <button type='button' onClick={()=>{
                window.open("https://github.com/Mohamed-shabil/ai_summarizer");
            }} className='black_btn'>
                Github
            </button>
        </nav>
      <h1 className="head_text">
        Summerize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify Your reading with Summize , an open-source article Summerizer that transform legnthy articles into clear and consice summaries
      </h2>
    </header>
  )
}

export default Hero