// Import Datas
import allQuestions from '../../datas/allQuestions';

// Import components
import Header from '../Header/Header';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import QuestionList from '../QuestionList/QuestionList';

import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

const QuestionPage = () => {
  const [lang, setLang] = useState('fr');

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
  };

  const { category } = useParams();

  const questionsByCategory = allQuestions.find((ques) => ques.category === category);

  if (!questionsByCategory) {
    return <Navigate to='/' />;
  }

  const questionsByLang = questionsByCategory.questions.filter((quest) => quest.lang === lang);

  return (
    <>
      <Header message="Retour à l'Accueil" />
      <LanguageSelector onLanguageChange={handleLanguageChange} />
      <QuestionList questions={questionsByLang} />
    </>
  );
};
export default QuestionPage;
