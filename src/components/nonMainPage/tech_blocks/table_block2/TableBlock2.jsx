import React from "react";
import './TableBlock2.css'
const TableBlock2 = (props) =>{
    return(
        <div className='table_block1'>
            <h1 className='h1_block_table1'>{props.bigTxt}</h1>
            <div className='main_block_table1'>
            <table className="table_ab_liv" cellSpacing={4} > 
                <tr className="tr_ab_liv">
                    <td><p>Янв</p></td>
                    <td><p>Фев</p></td>
                    <td><p>Мар</p></td>
                    <td><p>Апр</p></td>
                    <td><p>Май</p></td>
                    <td><p>Июнь</p></td>
                   
                </tr>
                <tr className="tr_ab_liv">
                <td><p>-11.1°</p></td>
                    <td><p>-9.4°</p></td>
                    <td><p>-3.3°</p></td>
                    <td><p>+5.1°</p></td>
                    <td><p>+12.6°</p></td>
                    <td><p>+16.6°</p></td>
                </tr>
                </table>
                
                <table className="table_ab_liv" cellSpacing={4}>   
                <tr className="tr_ab_liv">
                <td><p>Июль</p></td>
                    <td><p>Авг</p></td>
                    <td><p>Сен</p></td>
                    <td><p>Окт</p></td>
                    <td><p>Ноя</p></td>
                    <td><p>Дек</p></td>
                </tr>
                <tr className="tr_ab_liv" >
                    <td><p>+18.8°</p></td>
                    <td><p>+16.7°</p></td>
                    <td><p>+10.9°</p></td>
                    <td><p>+4.0°</p></td>
                    <td><p>-2.6°</p></td>
                    <td><p>-7.9°</p></td>
                </tr>
               
            </table>
            </div>
        </div>
    )
}
export default TableBlock2;