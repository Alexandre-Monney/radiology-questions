import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import './style.scss';

const Questions = ({ questionList, showMeFlag, header }) => {
  useEffect(() => {
    showMeFlag();
    header("Retour à l'Accueil");
  }, []);

  return (
    <div className='main'>
      {questionList.map((question) => (
        <Segment className='question' key={question.id}>
          {question.fr}
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
};
