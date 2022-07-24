// Import React & Router
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// Import App style
import './App.scss';

// Import all components
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import NotFound from '../NotFound/NotFound';
import QuestionList from '../QuestionList/QuestionList';
import Footer from '../Footer/Footer';

// Import data
import irm from '../../datas/irm';
import radio from '../../datas/radio';
import scanner from '../../datas/scan';

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

  const sortQuestionsByLang = (questions) => {
    const sortedQuestions = questions.filter((q) => q.lang === lang);
    return sortedQuestions;
  };

  const getQuestionsByCategory = (category) => {
    return sortQuestionsByLang(category);
  };

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

  const Pages = [
    {
      id: 1,
      name: 'HomePage',
      path: '/',
      element: <HomePage resetStates={resetStates} />,
    },
    {
      id: 2,
      name: 'IRM',
      path: '/irm',
      element: (
        <QuestionList
          header={modifyHeaderMessage}
          questions={getQuestionsByCategory(irm)}
          handleLanguageChange={handleLanguageChange}
          languages={languages}
        />
      ),
    },
    {
      id: 3,
      name: 'Scanner',
      path: '/scanner',
      element: (
        <QuestionList
          questions={getQuestionsByCategory(scanner)}
          handleLanguageChange={handleLanguageChange}
          header={modifyHeaderMessage}
          languages={languages}
        />
      ),
    },
    {
      id: 4,
      name: 'Radio',
      path: '/radio',
      element: (
        <QuestionList
          questions={getQuestionsByCategory(radio)}
          handleLanguageChange={handleLanguageChange}
          header={modifyHeaderMessage}
          languages={languages}
        />
      ),
    },
  ];

  return (
    <div className='App'>
      <Header headerMessage={headerMessage} />

      <Routes>
        {Pages.map((page) => (
          <Route key={page.id} path={page.path} element={page.element} />
        ))}

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
