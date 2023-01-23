import              React,{useEffect,useState} from 'react';
import              './MainBlockStyle.css'



function MainBlock() {

  
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })
  
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }
  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])


  return (
    <div className='triangle_block'>
    <div className='main_inf'>
      <h2 className='textar'>
        Кострома это - город в россии на реке Волге, основанный Юрием Долгоруким
        в 1152 году. Административный центр Костромской области, речной порт.
      </h2>
    </div>
      {windowDimenion.winWidth > 1000 ? 
      <svg width="141" height="294" viewBox="0 0 141 294" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_118_2)">
        <path d="M4 0H137V274L70.5 156L4 274V0Z" fill="#873939" />
      </g>
      <defs>
        <filter id="filter0_d_118_2" x="0" y="0" width="141" height="294" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="16" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_118_2" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_118_2" result="shape" />
        </filter>
      </defs>
    </svg> :
    <div></div> 
    }
  </div>
  );
}

export default MainBlock;