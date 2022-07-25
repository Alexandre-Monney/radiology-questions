// Import React & Router
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// Import App style
import './App.scss';

// Import all components
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import QuestionPage from '../QuestionPage/QuestionPage';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

// Import data ( in QuestionPage directly )
// import irm from '../../datas/irm';
// import radio from '../../datas/radio';
// import scanner from '../../datas/scan';

const languages = [
  {
    name: 'Français',
    short: 'fr',
    img: '../../../images/french_flag.png',
  },
  {
    name: 'English',
    short: 'en',
    img: '../../../images/uk_flag.png',
  },
  {
    name: 'Espanol',
    short: 'es',
    img: '../../../images/spanish_flag.svg',
  },
];

const welcomeMessage = 'Bienvenue sur Radiology Questions';

function App() {
  const [headerMessage, setHeaderMessage] = useState(welcomeMessage);
  const [lang, setLang] = useState('fr');
  const [category, setCategory] = useState('');

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
  };

  const resetStates = () => {
    setHeaderMessage(welcomeMessage);
    setLang('fr');
  };

  const modifyHeaderMessage = (message) => {
    setHeaderMessage(message);
  };

  return (
    <div className='App'>
      <Header headerMessage={headerMessage} />

      <Routes>
        <Route path='/' element={<HomePage resetStates={resetStates} setCategory={setCategory} />} />

        <Route
          path='/category'
          element={
            <QuestionPage
              languages={languages}
              handleLanguageChange={handleLanguageChange}
              header={modifyHeaderMessage}
              category={category}
              lang={lang}
            />
          }
        />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
