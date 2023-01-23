import              '../../App.css';
import              React, {useEffect, useState} from 'react';
import              './MapBlockStyle.css'

function MapBlock(props) {
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
      <div className='all_big_block'>
          <div className='background_pic'>
          {windowDimenion.winWidth > 1000 ?
            <div className='left_pic'>
              <img src={props.sursLeft} alt=""></img>
              </div>
              :
                <div></div>
                }   
              <h1 className='big_txt'>{props.mainTxt}</h1>
              {windowDimenion.winWidth > 1000 ? 
              <div className='right_pic'>
              <img src={props.sursRight} alt=""></img>
          </div>:
            <div></div>
          }
          </div>
          <h2 className='little_txt'>{props.underTxt}</h2>
      </div>
  );
}

export default MapBlock;