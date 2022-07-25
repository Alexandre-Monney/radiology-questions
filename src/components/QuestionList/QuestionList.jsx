import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import './style.scss';

const QuestionList = ({ questions }) => {
  return (
    <>
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
};
