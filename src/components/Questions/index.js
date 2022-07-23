import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import './style.scss';

const Questions = ({ questionList, showMeFlag, header, language }) => {
  useEffect(() => {
    showMeFlag();
    header("Retour à l'Accueil");
  }, []);

  const getQuestionsbyLang = (lang) => {
    let questions;
    switch (lang) {
      case 'fr':
        questions = questionList.map((question) => ({
          id: question.id,
          question: question.fr,
        }));
        break;
      case 'es':
        questions = questionList.map((question) => ({
          id: question.id,
          question: question.esp,
        }));
        break;
      case 'en':
        questions = questionList.map((question) => ({
          id: question.id,
          question: question.en,
        }));
        break;
    }
    return questions;
  };

  const newListOfQuestions = getQuestionsbyLang(language);

  return (
    <div className='main'>
      {newListOfQuestions.map((item) => (
        <Segment className='question' key={item.id}>
          {item.question}
        </Segment>
      ))}
    </div>
  );
};

export default Questions;

Questions.propTypes = {
  questionList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      fr: PropTypes.string.isRequired,
    }),
  ),
  showMeFlag: PropTypes.func.isRequired,
  header: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};
