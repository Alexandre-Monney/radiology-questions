// Import React & Router
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// Import App style
import './App.scss';

// Import all components
import HomePage from '../HomePage/HomePage';
import QuestionPage from '../QuestionPage/QuestionPage';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

function App() {
  const [category, setCategory] = useState('');

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage setCategory={setCategory} />} />

        <Route path='/category' element={<QuestionPage category={category} />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
