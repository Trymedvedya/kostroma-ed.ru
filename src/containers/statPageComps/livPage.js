import                      React from "react";
import                      Block from "../../components/nonMainPage/txt_block/TxtBlock";
import                      LivImg from "../../imgs/livImg.jpg"
import                      Graph from "../../imgs/graph.jpg"
import                      '../../App.css'
import                      ImgBlock from "../../components/nonMainPage/img_block/ImgBlock";
import                      "../../App.css"
import                      TableBlock from "../../components/nonMainPage/tech_blocks/table_block1/TableBlock";
const LivPage = (props) =>{
    return(
        <div className='Liv_Main'>
        <Block bigTxt={"Жилищный фонд Костромы"}
            mainTxt={"Обеспеченность жильем населения в Костроме в период с 19 по 20 год увеличилась на 1,2 м²/чел, тем самым составив 26,6 м² /чел. В регионе увеличилась на 2,1 м² / чел , составив 29 м²/чел, в РФ увеличилась на 1,1 м² /чел , составив 26,9 м²/чел. В период с 20 по 21 год в городе обеспеченность жильем составила 26,9 м²/чел, увеличившись на  0,3 м²/чел. В регионе 29,1 м² / чел , увеличившись всего на 0,1  м² / чел.                                                       "}
            imgBlock={LivImg}/>

        <TableBlock bigTxt={"В РФ этот год остался неизменным ."}/>

        <ImgBlock bigTxt={"Жилищный фонд Костромы: Графики"}
            imgBlock={Graph}/>
            
        </div>
        
    )
}
export default LivPage;