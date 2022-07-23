import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Navigation from '../Navigation';
import NotFound from '../NotFound';
import Questions from '../Questions';
import './App.scss';

//import data pour test
import irm from '../../datas/irm';
import radio from '../../datas/radio';
import scan from '../../datas/scan';
import Flag from '../Flag';
import { useState } from 'react';

function App() {
  const [displayFlag, setDisplayFlag] = useState(false);

  const showMeFlag = () => {
    setDisplayFlag(true);
  };

  const hideFlag = () => {
    setDisplayFlag(false);
  };

  return (
    <div className='App'>
      <Header />
      {displayFlag && <Flag />}
      <Routes>
        <Route path='/' element={<Navigation hideFlag={hideFlag} />} />

        <Route path='/irm' element={<Questions questionList={irm} showMeFlag={showMeFlag} />} />
        <Route path='/scanner' element={<Questions questionList={scan} showMeFlag={showMeFlag} />} />
        <Route path='/radio' element={<Questions questionList={radio} showMeFlag={showMeFlag} />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
