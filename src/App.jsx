import React, { useState }  from 'react'
import Light from './assets/light.png'
import Lamp from './assets/lamp.png'
import Logo from './assets/logo.png'
import Menu from './assets/menu.png'

const App = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(prevState => !prevState);
  }

  return (
    <div className={`h-[100vh] bg-[#1d2026]  font-[Montserrat] relative transition-colors duration-1000 ${isActive ? 'bg-[#1d2026]' : 'bg-[#1e8077]'} ${isActive ? 'text-white' : 'text-black'}`}>
      <nav className='w-[100%] h-[16vh] bg-[transparent] flex items-center px-[7%] justify-between'>
        <div className='flex items-center gap-4'>
          <img src={Menu} alt=""  className='cursor-pointer w-[30px]'/>
          <img src={Logo} alt="" className='w-[160px] cursor-pointer hover:animate-bounce'/>
        </div>

        <div className='flex gap-8'>
          <div className='flex items-center gap-5 text-[15px]  nav-links'>
            <p>Latest</p>
            <p>Modern</p>
            <p>Contemporary</p>
            <p>Affordable</p>
          </div>

          <button className={`h-[25px] w-[55px]  rounded-[25px] border-0 flex items-center cursor-pointer transition-colors duration-1000 ${isActive ? 'bg-[#1e8077]' : 'bg-white'}`} onClick={handleClick}>
            <div className={`h-[23px] w-[23px] rounded-[50%] bg-[#1e8077] mx-[2px] transition-transform duration-1000 ${isActive ? 'translate-x-7' : 'translate-x-0'} ${isActive ? 'bg-white' : 'bg-[#1e8077]'}`}></div>
          </button>
        </div>
      </nav>

      <div>
        <img src={Lamp} alt="" className='w-[150px] absolute top-[0px] left-[25%]'/>
        <img src={Light} alt="" className={`absolute w-[530px] top-[46vh] left-[10.6%] transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}/>
      </div>

      <div className='ml-[50%] mt-[50px]'>
        <h1 className='text-[4rem]'>Latest <br />in Lighting</h1>
        <p className='text-[14px]'>This is the first lamp from our company. We're making a huge collection of <br />modern lamps in all categories from home use to office use.</p>
        <button className={`bg-[#1e8077] px-[30px] py-[10px] text-[14px] rounded-[25px] mt-4  hover:text-[#1e8077] transition-colors duration-1000 ${isActive ? 'bg-[#1e8077]' : 'bg-white'} transition-colors duration-1000 ${isActive ? 'hover:bg-white' : 'hover:bg-black'} ${isActive ? 'text-white' : 'text-black'}`}>Check All Collections</button>
      </div>

      <div className='flex ml-[70%] mt-[120px] items-center gap-3'>
        <p className='text-[12px]'>04</p>
        <div className={`w-[220px] h-1 bg-black transition-colors duration-1000 ${isActive ? 'bg-white' : 'bg-black'}`}>
          <hr className={`h-1 bg-[#1e8077] border-0 w-[110px] transition-colors duration-1000 ${isActive ? 'bg-[#1e8077]' : 'bg-white'}`}/>
        </div>
        <p className='text-[12px]'>05</p>
      </div>
    </div>
  )
}

export default App
