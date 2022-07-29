// Import Datas
import allQuestions from '../../datas/allQuestions';

// Import components
import Header from '../Header/Header';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import QuestionList from '../QuestionList/QuestionList';

import PropTypes from 'prop-types';
import { useState } from 'react';

const QuestionPage = ({ category }) => {
  const [lang, setLang] = useState('fr');

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
  };

  const questionsByCategory = allQuestions.find((ques) => ques.category === category).questions;

  const questionsByLang = questionsByCategory.filter((quest) => quest.lang === lang);

  return (
    <>
      <Header headerMessage="Retour à l'Accueil" />
      <LanguageSelector onLanguageChange={handleLanguageChange} />
      <QuestionList questions={questionsByLang} />
    </>
  );
};
export default QuestionPage;

QuestionPage.propTypes = {
  category: PropTypes.string.isRequired,
};
