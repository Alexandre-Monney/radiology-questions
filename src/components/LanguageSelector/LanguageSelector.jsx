import languages from '../../datas/languages';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import './style.scss';

const LanguageSelector = ({ onLanguageChange }) => {
  const selectedLanguage = (value) => {
    onLanguageChange(value);
  };

  return (
    <div className='flag'>
      {languages.map((language) => (
        <Image
          key={language.name}
          onClick={() => selectedLanguage(language.short)}
          className='flag-img'
          src={language.img}
          alt=''
        />
      ))}
    </div>
  );
};
export default LanguageSelector;

LanguageSelector.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
};
