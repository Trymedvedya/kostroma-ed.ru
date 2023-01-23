import React from "react";
import './TxtBlock.css'
const Block = (props) =>{
    return(
        <div className='block'>
            <h1 className='h1_block'>{props.bigTxt}</h1>
            <div className='main_txt_block'>
            <img className='img_block' src={props.imgBlock} alt="" />
            <p className='p_block'>{props.mainTxt}</p>
            </div>
        </div>
    )
}
export default Block;