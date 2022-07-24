import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './style.scss';

const QuestionList = ({ questions, handleLanguageChange, header, languages }) => {
  useEffect(() => {
    header("Retour à l'Accueil");
  }, []);

  console.log(questions);

  return (
    <>
      <LanguageSelector languages={languages} onLanguageChange={handleLanguageChange} />
      <div className='main'>
        {questions.map((q) => (
          <Segment key={q.id} className='question'>
            {q.question}
          </Segment>
        ))}
      </div>
    </>
  );
};

export default QuestionList;

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      lang: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
    }),
  ),
  handleLanguageChange: PropTypes.func.isRequired,
  header: PropTypes.func.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      short: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ),
};
