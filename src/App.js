import React from 'react';
import './App.css';
//files

//comps or functions
import                          { Route, Routes, BrowserRouter }      from 'react-router-dom';
import                          MainPage                              from './containers/mainPage';
import                          Layout                                from './components/nonMainPage/Layout';
import                          StatPage                              from './containers/statPage';
import                          LivPage                               from './containers/statPageComps/livPage.js';
import                          MedPage                               from './containers/statPageComps/medPage';
import                          EcoPage                               from './containers/statPageComps/ecoPage';
import                          GovPage                               from './containers/statPageComps/govPage';
import                          CultPage                              from './containers/statPageComps/cultPage';
import                          EduPage                               from './containers/statPageComps/eduPage';
import                          UslPage                               from './containers/statPageComps/bitPage';
import                          EconPage                              from './containers/statPageComps/econPage';
import                          NasPage                               from './containers/statPageComps/nasPage';
import                          EksPage                               from './containers/statPageComps/eksPage';
import                          IsslPage                              from './containers/statPageComps/isslPage';





function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/stats' element={<StatPage />} >
            <Route path='/stats/liv' element={<LivPage />} />
            <Route path='/stats/med' element={<MedPage />} />
            <Route path='/stats/eco' element={<EcoPage />} />
            <Route path='/stats/gov' element={<GovPage />} />
            <Route path='/stats/cult' element={<CultPage />} />
            <Route path='/stats/edu' element={<EduPage />} />
            <Route path='/stats/usl' element={<UslPage />} />
            <Route path='/stats/economics' element={<EconPage />} />
            <Route path='/stats/nasel' element={<NasPage />} />
            <Route path='/stats/places' element={<EksPage />} />
            <Route path='/stats/issl' element={<IsslPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
