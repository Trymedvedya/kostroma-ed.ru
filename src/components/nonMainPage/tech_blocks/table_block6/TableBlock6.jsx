import React from "react";
import './TableBlock6.css'
const TableBlock6 = (props) =>{
    return(
        <div className='table_block6'>
            <h1 className='h1_block_table6'>{props.bigTxt}</h1>
            <div className='main_block_table6'>
            <table className="table_ab_liv6" cellSpacing={4} > 
                <tr className="tr_ab_liv6">
                    <td className="td6"><p>Парикмахерская</p></td>
                    <td className="td6"><p>Прачечная</p></td>
                    <td className="td6"><p>Баня</p></td>
                    <td className="td6"><p>Копи-центр</p></td>
                   
                </tr>
                <tr className="tr_ab_liv6">
                    <td className="td6"><p>202</p></td>
                    <td className="td6"><p>5</p></td>
                    <td className="td6"><p>22</p></td>
                    <td className="td6"><p>7</p></td>
                </tr>
               
            
            </table>
            <table className="table_ab_liv6" cellSpacing={4} > 
                <tr className="tr_ab_liv6">
                    <td className="td6"><p>Химчистка</p></td>
                    <td className="td6"><p>Фотоуслуги</p></td>
                    <td className="td6"><p>Ломбард</p></td>
                    <td className="td6"><p>Прокат</p></td>
                    <td className="td6"><p>Клиниг</p></td>
                </tr>
                <tr className="tr_ab_liv6">
                    <td className="td6"><p>20</p></td>
                    <td className="td6"><p>61</p></td>
                    <td className="td6"><p>49</p></td>
                    <td className="td6"><p>19</p></td>
                    <td className="td6"><p>17</p></td>
                </tr>
               
            
            </table>
            <table className="table_ab_liv6" cellSpacing={4} > 
                <tr className="tr_ab_liv6">
                    <td className="td6"><p>Автомойка</p></td>
                    <td className="td6"><p>Ритуальные услуги</p></td>
                    <td className="td6"><p>Ритуальные принадлежности</p></td>
                    <td className="td6"><p>Ателье</p></td>
                </tr>
                <tr className="tr_ab_liv6">
                    <td className="td6"><p>62</p></td>
                    <td className="td6"><p>30</p></td>
                    <td className="td6"><p>5</p></td>
                    <td className="td6"><p>102</p></td>
                </tr>
               
            
            </table>
            <table className="table_ab_liv6" cellSpacing={4} > 
                <tr className="tr_ab_liv6">
                    <td className="td6"><p>Обувное ателье</p></td>
                    <td className="td6"><p>Ремонт в общем</p></td>
                    <td className="td6"><p>Мебель на заказ</p></td>
                    <td className="td6"><p>Вывоз мусора и отходов</p></td>
                    <td className="td6"><p>Мультисервис</p></td>
                </tr>
                <tr className="tr_ab_liv6">
                    <td className="td6"><p>166</p></td>
                    <td className="td6"><p>375</p></td>
                    <td className="td6"><p>54</p></td>
                    <td className="td6"><p>10</p></td>
                    <td className="td6"><p>0</p></td>
                </tr>
               
            
            </table>
            </div>
        </div>
    )
}
export default TableBlock6;