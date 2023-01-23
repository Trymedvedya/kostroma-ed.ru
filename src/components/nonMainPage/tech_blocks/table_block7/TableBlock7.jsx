import React from "react";
import './TableBlock7.css'
const TableBlock7 = (props) =>{
    return(
        <div className='table_block7'>
            <h1 className='h1_block_table7'>{props.bigTxt}</h1>
            <div className='main_block_table7'>
            <table className="table_ab_liv7" cellSpacing={4} > 
                <tr className="tr_ab_liv7">
                    <td className="td7"><p>Ремонт мебели</p></td>
                    <td className="td7"><p>Ремонт телефонов</p></td>
                    <td className="td7"><p>Ремонт обуви</p></td>
                    <td className="td7"><p>Ремонт часов</p></td>
                    <td className="td7"><p>Ремонт одежды</p></td>
                    
                </tr>
                <tr className="tr_ab_liv7">
                    <td className="td7"><p>3</p></td>
                    <td className="td7"><p>47</p></td>
                    <td className="td7"><p>59</p></td>
                    <td className="td7"><p>11</p></td>
                    <td className="td7"><p>16</p></td>
                </tr>
            </table>
            <table className="table_ab_liv7" cellSpacing={4} > 
                <tr className="tr_ab_liv7">
                    <td className="td7"><p>Ремонт ПК</p></td>
                    <td className="td7"><p>Велоремонт</p></td>
                    <td className="td7"><p>Ремонт бытовой техники</p></td>
                    <td className="td7"><p>Ремонт КПП</p></td>
                    <td className="td7"><p>Ремонт машин</p></td>
                </tr>
                <tr className="tr_ab_liv7">
                    <td className="td7"><p>28</p></td>
                    <td className="td7"><p>6</p></td>
                    <td className="td7"><p>24</p></td>
                    <td className="td7"><p>7</p></td>
                    <td className="td7"><p>174</p></td>
                </tr>
            </table>
            </div>
        </div>
    )
}
export default TableBlock7;