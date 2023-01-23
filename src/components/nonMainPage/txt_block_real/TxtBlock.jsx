import React from "react";
import './TxtBlock.css'
const TxtBlock = (props) =>{
    return(
        <div className='block'>
            <h1 className='h1_block'>{props.bigTxt}</h1>
            <div className='main_txt_block'>
            <p className='p_block'>{props.mainTxt}</p>
            </div>
        </div>
    )
}
export default TxtBlock;