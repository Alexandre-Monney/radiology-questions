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
const examsList = [
  {
    id: 1,
    path: '/irm',
    name: irm,
  },
  {
    id: 2,
    path: '/scanner',
    name: scan,
  },
  {
    id: 3,
    path: '/radio',
    name: radio,
  },
];
import Flag from '../Flag';
import { useState } from 'react';

function App() {
  const welcomeMessage = 'Bienvenue sur Radiology Questions';

  const [displayFlag, setDisplayFlag] = useState(false);
  const [headerMessage, setHeaderMessage] = useState(welcomeMessage);
  const [language, setLanguage] = useState('fr');

  const modifyLanguage = (lang) => {
    setLanguage(lang);
  };

  const showMeFlag = () => {
    setDisplayFlag(true);
  };

  const resetStates = () => {
    setDisplayFlag(false);
    setHeaderMessage(welcomeMessage);
    setLanguage('fr');
  };

  const modifyHeaderMessage = (message) => {
    setHeaderMessage(message);
  };

  return (
    <div className='App'>
      <Header headerMessage={headerMessage} />
      {displayFlag && <Flag modifyLanguage={modifyLanguage} />}
      <Routes>
        <Route path='/' element={<Navigation resetStates={resetStates} />} />

        {examsList.map((elem) => (
          <Route
            key={elem.id}
            path={elem.path}
            element={
              <Questions
                questionList={elem.name}
                showMeFlag={showMeFlag}
                header={modifyHeaderMessage}
                language={language}
              />
            }
          />
        ))}

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
