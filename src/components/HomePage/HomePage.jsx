import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './style.scss';

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

const HomePage = ({ setCategory }) => {
  const handleClick = (category) => {
    setCategory(category);
  };

  return (
    <>
      <Header headerMessage={'Bienvenue sur Radiology Questions'} />
      <div className='nav'>
        {links.map((link) => (
          <Link key={link.id} className='nav-button' to='/category' onClick={() => handleClick(link.short)}>
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};
export default HomePage;

HomePage.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
