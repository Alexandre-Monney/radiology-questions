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
  const welcomeMessage = 'Bienvenue sur Radiology Questions';

  const [displayFlag, setDisplayFlag] = useState(false);
  const [headerMessage, setHeaderMessage] = useState(welcomeMessage);

  const showMeFlag = () => {
    setDisplayFlag(true);
  };

  const resetStates = () => {
    setDisplayFlag(false);
    setHeaderMessage(welcomeMessage);
  };

  const modifyHeaderMessage = (message) => {
    setHeaderMessage(message);
  };

  return (
    <div className='App'>
      <Header headerMessage={headerMessage} />
      {displayFlag && <Flag />}
      <Routes>
        <Route path='/' element={<Navigation resetStates={resetStates} />} />

        <Route
          path='/irm'
          element={<Questions questionList={irm} showMeFlag={showMeFlag} header={modifyHeaderMessage} />}
        />
        <Route
          path='/scanner'
          element={<Questions questionList={scan} showMeFlag={showMeFlag} header={modifyHeaderMessage} />}
        />
        <Route
          path='/radio'
          element={<Questions questionList={radio} showMeFlag={showMeFlag} header={modifyHeaderMessage} />}
        />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
