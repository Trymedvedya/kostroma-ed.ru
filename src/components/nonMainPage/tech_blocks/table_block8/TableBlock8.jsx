import React from "react";
import './TableBlock8.css'
const TableBlock8 = (props) =>{
    return(
        <div className='table_block8'>
            <h1 className='h1_block_table8'>{props.bigTxt}</h1>
            <div className='main_block_table8'>
            <table className="table_ab_liv8" cellSpacing={4} > 
                <tr className="tr_ab_liv8">
                    <td className="td8"><p><span className="span_zag">Положение в смысле математической географии</span></p></td>
                    <td className="td8"><p><span className="span_zag">Физико-географическое положение</span></p></td>
                </tr>
                <tr className="tr_ab_liv8">
                    <td className="td8"><p>57°46’с.ш. 40°56’в.д</p></td>
                    <td className="td8"><p>Кострома расположена на Костромской низменности, на обоих берегах Горьковского водохранилища Волги , у старого устья реки Костромы - 65 км от Ярославля , в 105 км от города Иваново и в 370 км к северо-востоку от Москвы.</p></td>
                    </tr>
            </table>
            <table className="table_ab_liv8" cellSpacing={4} > 
                <tr className="tr_ab_liv8">
                    <td className="td8"><p><span className="span_zag">Политико-географическое положение</span></p></td>
                    <td className="td8"><p><span className="span_zag">Экономико-географическое положение</span></p></td>
                </tr>
                <tr className="tr_ab_liv8">
                    <td className="td8"><p>Костромская область граничит: на севере – с Вологодской областью, на юге - с Ивановской Нижегородской областями, на западе – с Ярославской, на востоке – с Кировской областью.</p></td>
                    <td className="td8"><p>1. предприятия легкой промышленности <br></br> 2. ремесла <br></br>   3. судостроительные центры</p></td>
                </tr>
            </table>
            <table className="table_ab_liv8" cellSpacing={4} > 
                <tr className="tr_ab_liv8">
                    <td className="td8"><p><span className="span_zag">Административно-географическое положение</span></p></td>
                    <td className="td8"><p><span className="span_zag">Природно-географическое положение</span></p></td>
                    
                
                </tr>
                <tr className="tr_ab_liv8">
                    <td className="td8"><p>Кострома - административный центр Костромской области</p></td>
                    <td className="td8"><p>Кострома расположена на Костромской низменности, на обоих берегах Горьковского водохранилища Волги , у старого устья реки Костромы - 65 км от Ярославля , в 105 км от города Иваново и в 370 км к северо-востоку от Москвы.</p></td>
                </tr>
            </table>
            <table className="table_ab_liv8" cellSpacing={4} > 
                <tr className="tr_ab_liv8">
                    <td className="td8"><p><span className="span_zag">Демографическое положение</span></p></td>
                    <td className="td8"><p><span className="span_zag">Агрогеографическое положение</span></p></td>
                    <td className="td8"><p><span className="span_zag">Рекреацонно- географическое положение</span></p></td>
                
                </tr>
                <tr className="tr_ab_liv8">
                    <td className="td8"><p>Население около 270тыс чел.</p></td>
                    <td className="td8"><p>В 2020 году сх. организации Костромы собрали в общей сложности около 645тыс тонн зерновых культур с 48тыс гектаров посевных площадей.</p></td>
                    <td className="td8"><p>Кострома входит в Золотое Кольцо России, является туристическим городом. В городе расположено множество музеев , домов культуры , центров ремесел.</p></td>
                </tr>
            </table>
            </div>
        </div>
    )
}
export default TableBlock8;