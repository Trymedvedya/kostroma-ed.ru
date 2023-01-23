import              '../../App.css';
import              React,{useState,useEffect} from 'react';
import              "./CDistrBlockStyle.css"

function CDistrBlock(props) {
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
      <div className='all_big_block_distr'>
          <div className='background_pic_distr'>
              <h1 className='big_txt_distr'>{props.mainTxt}</h1>
          </div>
          <ul className='cdistr'>
            <div className='io'>
          <li className='li_in_distr' ><h2 className='little_txt_distr' >самый безопасный район</h2></li>
          <li className='li_in_distr' id='liCen2'><h2 className='little_txt_distr' >здесь располагаются администрации города, офисы, департаменты, рестораный и бары</h2></li>
          </div>
          <div className='io2'>
          <li className='li_in_distr' ><h2 className='little_txt_distr' >развито транспортное сообщение</h2></li>
          <li className='li_in_distr'><h2 className='little_txt_distr' >жилье повышенной комфортности</h2></li>
          </div>
          </ul>
      </div>
  );
}

export default CDistrBlock;