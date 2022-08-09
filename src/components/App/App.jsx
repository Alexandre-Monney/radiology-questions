// Import React & Router
import { Route, Routes } from 'react-router-dom';

// Import App style
import './App.scss';

// Import all components
import HomePage from '../HomePage/HomePage';
import QuestionPage from '../QuestionPage/QuestionPage';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path=':category' element={<QuestionPage />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
