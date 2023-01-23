import              React from 'react';
import              gerb from '../../imgs/gerb.png';
import              './GerbBlockStyle.css'

function gerbBlock() {
  return (

    <div className='gerb'>
      <img className='grbimg' alt='хуяка' src={gerb}></img> 
    </div>

  );
}

export default gerbBlock;