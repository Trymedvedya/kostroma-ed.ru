import              React from 'react';
import              './NasBlockStyle.css'
function nasBlock(props) {
  return (
  <div className='nasele2'>
    <div className='naselenie'>
    <h1 className='bignas'>население?</h1>
    <div className='bigimg'><img alt='хуяка' src={props.bigPic}></img></div>
    <h2 className='littlenas'>население города составляет, примерно, 270 366 человек.</h2>
    
    {/* <div className='middleimg' id='particle'><img alt='хуяка' src={props.midPic}></img></div> */}
    {/* <div className='littleimg' id='particle'><img  alt='хуяка' src={props.litPic}></img></div> */}
  </div>
  </div>

  );
}

export default nasBlock;