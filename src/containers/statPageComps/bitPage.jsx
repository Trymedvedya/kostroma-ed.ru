import                      React from "react";
import                      "../../App.css"
import TableBlock6 from "../../components/nonMainPage/tech_blocks/table_block6/TableBlock6";
import TableBlock7 from "../../components/nonMainPage/tech_blocks/table_block7/TableBlock7";
const UslPage = (props) =>{
    return(
        <div className='Liv_Main'>
            <TableBlock6 bigTxt={"Бытовое обслуживание Костромы"}/>
            <h1 className="dop">Всего:1206</h1>
            <TableBlock7 bigTxt={"Ремонт"} />
        </div>
        
    )
}
export default UslPage;