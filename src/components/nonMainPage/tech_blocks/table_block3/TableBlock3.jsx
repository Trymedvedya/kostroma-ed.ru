import React from "react";
import './TableBlock3.css'
const TableBlock3 = (props) =>{
    return(
        <div className='table_block1'>
            <h1 className='h1_block_table1'>{props.bigTxt}</h1>
            <div className='main_block_table1'>
            <table className="table_ab_liv" cellSpacing={4} > 
                <tr className="tr_ab_liv">
                    <td><p>Наименование органа</p></td>
                    <td><p>ФИО Руководителя</p></td>
                    <td><p>Адрес</p></td>
                </tr>
                <tr className="tr_ab_liv">
                    <td><p>Администрация города</p></td>
                    <td><p>Смирнов Алексей Васильевич (глава) </p></td>
                    <td><p>г.Кострома, ул.Советская, д.1</p></td>
                </tr>
                <tr className="tr_ab_liv">
                    <td><p>Думы города</p></td>
                    <td><p>Журин Юрий Валерьевич</p></td>
                    <td><p>г.Кострома ул.Никитская, д.72</p></td>
                </tr>
                <tr className="tr_ab_liv">
                    <td><p>Контрольно-счетная комиссия города</p></td>
                    <td><p>Председатель контрольно-счетной комиссии города - Смирнов Вадим Вячеславович</p></td>
                    <td><p>г.Кострома, пр.Мира, д.13</p></td>
                </tr>
                
               
            </table>
            </div>
        </div>
    )
}
export default TableBlock3;