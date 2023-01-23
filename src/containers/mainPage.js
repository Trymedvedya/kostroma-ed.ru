import              React from "react";
import              '../App.css';
//files
import              lyudi from '../imgs/lyudi.jpg';
import              ludiMiddle from '../imgs/ludi_middle.webp';
import              ludiLittle from '../imgs/ludi_little.webp';
import              mapKosSide1 from '../imgs/mapKostromaSide.jpg';
import              mapKosSide2 from '../imgs/mapKostromaSide2.jpg';

//comps or functions
import              GerbBlock from '../components/mainPage/GerbBlock';
import              MainBlock from '../components/mainPage/MainBlock';
import              NasBlock from '../components/mainPage/NasBlock';
import              MapBLock from '../components/mainPage/MapBlock';
import              CDistrBLock from '../components/mainPage/CDistrBLock';
import              OthDistrBlock from '../components/mainPage/OthDistrBlock'

import              'rc-dropdown/assets/index.css';


function MainPage(){
    
    
    
      return (
    
        <div className='bobby'>
          <GerbBlock />
          <MainBlock />
          <NasBlock bigPic={lyudi} litPic={ludiLittle} midPic={ludiMiddle} />
          <MapBLock sursLeft={mapKosSide1} sursRight={mapKosSide2} underTxt={"площадь костромы составляет 144.5 км²"} mainTxt={"площадь?"} />
          <CDistrBLock mainTxt={"центральный район"} />
          <OthDistrBlock mainTxt={"заволжский район"} mainTxtOth2={"фабричный район"} />
        </div>
    
      );
};
export default MainPage;