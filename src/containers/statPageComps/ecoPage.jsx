import React from "react";
import Block from "../../components/nonMainPage/txt_block/TxtBlock";
import EcoImg from "../../imgs/eco.jpg"
import EcoImg2 from "../../imgs/Eco2.png"
import Dirty from "../../imgs/dirty.png"
import Ito from "../../imgs/itog.png"
import '../../App.css'
import TableBlock2 from "../../components/nonMainPage/tech_blocks/table_block2/TableBlock2";
const EcoPage = (props) =>{
    return(
        <div className='Liv_Main'>
            <TableBlock2 bigTxt={"Месячная погода"}/>
        <Block bigTxt={"Климатические особенности"}
            mainTxt={"Лето в Костроме начинается в конце мая и держится до августа. Средняя температура составляет 25°.  Но иногда температура выше +30° стоит неделями, изматывая морально и физически неподготовленные к такому экстриму организмы костромичей. Зима традиционно холодная, с большим количеством снега, который покрывает высокими сугробами дворы и главные улицы города. Зима стоит с середины ноября по середину марта со средней температурой -10°.  Столбик термометра опускается от -25 до -30° регулярно. Повышенная влажность от Волги усугубляет проблему, но к морозам костромичи все же более привыкшие."}
            imgBlock={EcoImg}
            />
           <Block bigTxt={"Экология"}
            mainTxt={"С точки зрения экологии Кострому относят в топ 10 экологически-благоприятным городам России. Но в современной Костроме все же существуют районы с повышенным уровнем загрязнения воздуха (Фабричный район). Кострому спасает лишь огромный лесной массив, системы малых рек и озер."}
            imgBlock={EcoImg2}
            />
                       <Block bigTxt={"Загрязнение"}
            mainTxt={"На территории Костромы, помимо привычных каждому городу ТЭЦ, основным источником загрязнения является фанерный комбинат «Фанплит». Большинство остальных промышленных предприятий и заводов благополучно прекратили свое существование и давно сданы в аренду. Основной удар по экологии города принимает на себя река Волга, регулярно получая «дозу» в виде сточных вод. Но этой мелочью можно пренебречь, учитывая, что в Костроме Волга уже до краев накачана отходами производств расположенного выше по течению Ярославля."}
            imgBlock={Dirty}
            />
            <Block bigTxt={"Вывод"}
            mainTxt={"Кому небезразлично здоровье, купаться в Волге не стоит, несмотря на наличие 2 городских пляжей и радужные отчеты городской администрации."}
            imgBlock={Ito}
            />
        </div>
    )
}
export default EcoPage;