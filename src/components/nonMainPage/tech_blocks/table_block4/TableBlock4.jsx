import React from "react";
import './TableBlock4.css'
const TableBlock4 = (props) =>{
    return(
        <div className='table_block1'>
            <h1 className='h1_block_table1'>{props.bigTxt}</h1>
            <div className='main_block_table1'>
            <table className="table_ab_liv" cellSpacing={4} > 
                <tr className="tr_ab_liv">
                    <td><p>2006</p></td>
                    <td><p>2007</p></td>
                    <td><p>2008</p></td>
                    <td><p>2009</p></td>
                    <td><p>2010</p></td>
                    <td><p>2011</p></td>
                </tr>
                <tr className="tr_ab_liv_place">
                    <td><p><span>1 место</span></p></td>
                </tr>
                <tr className="tr_ab_liv">
                    <td><p>Гимназия №28</p></td>
                    <td><p>Гимназия №1</p></td>
                    <td><p>Гимназия №28</p></td>
                    <td><p>Гимназия №28</p></td>
                    <td><p>Гимназия №1</p></td>
                    <td><p>Гимназия №28</p></td>
                </tr>
                <tr className="tr_ab_liv_place">
                <td><p><span>2 место</span></p></td>
                </tr>
                <tr className="tr_ab_liv">
                    <td><p>Гимназия №1</p></td>
                    <td><p>Гимназия №28</p></td>
                    <td><p>Гимназия №1</p></td>
                    <td><p>Гимназия №1</p></td>
                    <td><p>Гимназия №28</p></td>
                    <td><p>Лицей №17</p></td>
                </tr>
                <tr className="tr_ab_liv_place">
                <td><p><span>3 место</span></p></td>
                </tr>
                <tr className="tr_ab_liv">
                    <td><p>Лицей №32</p></td>
                    <td><p>Лицей №32</p></td>
                    <td><p>Школа №21</p></td>
                    <td><p>Школа №21</p></td>
                    <td><p>Гимназия №15</p></td>
                    <td><p>Школа №4</p></td>
                </tr>
            </table>
            </div>
        </div>
    )
}
export default TableBlock4;