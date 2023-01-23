import React from "react";
import './ImgBlock.css'
const ImgBlock = (props) =>{
    return(
        <div className='block2'>
            <h1 className='h1_block2'>{props.bigTxt}</h1>
            <img className='img_block2' src={props.imgBlock} alt="" />
            
        </div>
    )
}
export default ImgBlock;