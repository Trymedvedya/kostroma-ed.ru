import              '../../App.css';
import              React from 'react';
import              './OthDistrBlockStyle.css'

function OthDistrBlock(props) {
  return (
    <div className='all_bigger_block_oth'>
      <div className='all_big_block_oth'>
        <div className='background_pic_oth'>
          <h1 className='big_txt_oth'>{props.mainTxt}</h1>
        </div>
        <ul className='othdistr1'>
          <div>
          <li className='li_in_distr'><h2 className='little_txt_distr_oth' >высокий уровень преступности</h2></li>
          <li className='li_in_distr'><h2 className='little_txt_distr_oth' >"долина нищих" расположена тут</h2></li>
          </div>
          <div>
          <li className='li_in_distr' ><h2 className='little_txt_distr_oth' >самый зеленый район</h2></li>
          <li className='li_in_distr' ><h2 className='little_txt_distr_oth' >проблемы с водоснабжением</h2></li>
          </div>
        </ul>
      </div>
      <div className='all_big_block_oth2'>
        
      <ul className='othdistr2'>
        <div>
          <li className='li_in_distr'><h2 className='little_txt_distr_oth' >проблемы с водоснабжением</h2></li>
          <li className='li_in_distr'><h2 className='little_txt_distr_oth' >изношенные водные коммуникации</h2></li>
          </div>
          <div>
          <li className='li_in_distr' ><h2 className='little_txt_distr_oth' >аварийное жилье</h2></li>
          <li className='li_in_distr' ><h2 className='little_txt_distr_oth' >ветхое жилье</h2></li>
          </div>
        </ul>
        <div className='background_pic_oth2'>
          <h1 className='big_txt_oth'>{props.mainTxtOth2}</h1>
        </div>
       
      </div>
    </div>
  );
}

export default OthDistrBlock;