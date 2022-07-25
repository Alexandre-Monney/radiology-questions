import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const links = [
  {
    id: 1,
    name: 'IRM',
    short: 'irm',
  },
  {
    id: 2,
    name: 'Scanner',
    short: 'scanner',
  },
  {
    id: 3,
    name: 'Radio',
    short: 'radio',
  },
];

const HomePage = ({ resetStates, setCategory }) => {
  useEffect(() => {
    resetStates();
  }, []);

  const handleClick = (category) => {
    setCategory(category);
  };

  return (
    <div className='nav'>
      {links.map((link) => (
        <Link key={link.id} className='nav-button' to='/category' onClick={() => handleClick(link.short)}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};
export default HomePage;

HomePage.propTypes = {
  resetStates: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
};
