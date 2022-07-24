import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import './style.scss';

const LanguageSelector = ({ languages, onLanguageChange }) => {
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
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      short: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ),
  onLanguageChange: PropTypes.func.isRequired,
};
