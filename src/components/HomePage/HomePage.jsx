import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './style.scss';

const links = [
  {
    name: 'IRM',
    short: 'irm',
  },
  {
    name: 'Scanner',
    short: 'scanner',
  },
  {
    name: 'Radio',
    short: 'radio',
  },
];

const HomePage = ({ onCategoryChange }) => {
  const handleClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <>
      <Header message='Bienvenue sur Radiology Questions' />
      <div className='nav'>
        {links.map((link) => (
          <Link key={link.short} className='nav-button' to='/category' onClick={() => handleClick(link.short)}>
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};
export default HomePage;

HomePage.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};
