import React from "react";
import './TableBlock.css'
const TableBlock = (props) =>{
    return(
        <div className='table_block1'>
            <h1 className='h1_block_table1'>{props.bigTxt}</h1>
            <div className='main_block_table1'>
            <table className="table_ab_liv" cellSpacing={4} > 
                <thead className="tr_ab_liv">
                    <td><p>Где?</p></td>
                    <td><p>2019</p></td>
                    <td><p>2020</p></td>
                    <td><p>2021</p></td>
                </thead>
                <tr className="tr_ab_liv">
                    <td><p>Город</p></td>
                    <td><p>25.4</p></td>
                    <td><p>26.6</p></td>
                    <td><p>26.9</p></td>
                </tr>
                <tr className="tr_ab_liv">
                    <td><p>Регион</p></td>
                    <td><p>27.9</p></td>
                    <td><p>29</p></td>
                    <td><p>29.1</p></td>
                </tr>
                <tr className="tr_ab_liv">
                    <td><p>Россия</p></td>
                    <td><p>25.8</p></td>
                    <td><p>26.9</p></td>
                    <td><p>26.9</p></td>
                </tr>
            </table>
            </div>
        </div>
    )
}
export default TableBlock;