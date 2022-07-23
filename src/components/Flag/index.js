import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import './style.scss';

const Flag = ({ modifyLanguage }) => {
  const selectedLanguage = (value) => {
    modifyLanguage(value);
  };

  return (
    <div className='flag'>
      <Image onClick={() => selectedLanguage('fr')} className='flag-img' src='../../../images/french_flag.png' alt='' />
      <Image
        onClick={() => selectedLanguage('es')}
        className='flag-img'
        src='../../../images/spanish_flag.svg'
        alt=''
      />
      <Image onClick={() => selectedLanguage('en')} className='flag-img' src='../../../images/uk_flag.png' alt='' />
    </div>
  );
};
export default Flag;

Flag.propTypes = {
  modifyLanguage: PropTypes.func.isRequired,
};
