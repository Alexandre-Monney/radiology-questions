import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import './style.scss';

const Flag = ({ modifyLanguage }) => {
  const selectedLanguage = (value) => {
    modifyLanguage(value);
  };

  return (
    <div className='flag'>
      <Image
        onClick={() => selectedLanguage('fr')}
        className='flag-img'
        src='https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png'
        alt=''
      />
      <Image
        onClick={() => selectedLanguage('es')}
        className='flag-img'
        src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
        alt=''
      />
      <Image
        onClick={() => selectedLanguage('en')}
        className='flag-img'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1024px-Flag_of_the_United_Kingdom_%283-5%29.svg.png'
        alt=''
      />
    </div>
  );
};
export default Flag;

Flag.propTypes = {
  modifyLanguage: PropTypes.func.isRequired,
};
