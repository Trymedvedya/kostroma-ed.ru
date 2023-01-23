import React from "react";
import Block from "../../components/nonMainPage/txt_block/TxtBlock";
import '../../App.css'
import TableBlock4 from "../../components/nonMainPage/tech_blocks/table_block4/TableBlock4";
import ImgBlock from "../../components/nonMainPage/img_block/ImgBlock";
import GrEdu from "../../imgs/eduGr.png"
import School from "../../imgs/school.jpg"
import TableBlock5 from "../../components/nonMainPage/tech_blocks/table_block5/TableBlock5";
const EduPage = (props) =>{
    return(
        <div className='Liv_Main'>
            <ImgBlock
            imgBlock={GrEdu}
            bigTxt={"Образование Костромы: Графики"}/>
            <Block mainTxt={"По качеству образования Кострома занимает 99 место из 253 городов РФ. Это лучше чем в 60,87% крупных городах России."}
                    bigTxt={"Качество образования"}
                    imgBlock={School}
            />
            <TableBlock4 bigTxt={"Где лучше всего учат русскому языку?"}/>
            <TableBlock5 bigTxt={"Где лучше всего учат математике?"}/>
            
                       
             
            
            
        </div>
    )
}
export default EduPage;