import PropTypes from 'prop-types';
import { useEffect } from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import QuestionList from '../QuestionList/QuestionList';
import allQuestions from '../../datas/allQuestions'; // Trying new datas format

const QuestionPage = ({ category, handleLanguageChange, header, languages, lang }) => {
  const getQuestionsByCategory = () => {
    const sortedQuests = allQuestions.find((ques) => ques.category === category);
    return sortedQuests.questions;
  };

  const sortedQuestionsByCategory = getQuestionsByCategory();

  const sortQuestionsByLang = (questionsList) => {
    const sortedQuestions = questionsList.filter((q) => q.lang === lang);
    return sortedQuestions;
  };

  const sortedQuestionsByLang = sortQuestionsByLang(sortedQuestionsByCategory);

  useEffect(() => {
    header("Retour à l'Accueil");
  }, []);

  return (
    <>
      <LanguageSelector languages={languages} onLanguageChange={handleLanguageChange} />
      <QuestionList questions={sortedQuestionsByLang} />
    </>
  );
};
export default QuestionPage;

QuestionPage.propTypes = {
  handleLanguageChange: PropTypes.func.isRequired,
  header: PropTypes.func.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      short: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ),
  lang: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
