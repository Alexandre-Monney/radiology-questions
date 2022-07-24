import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const links = [
  // Pages.jsx will be in remplacement after export
  {
    id: 1,
    path: '/irm',
    name: 'IRM',
  },
  {
    id: 2,
    path: '/scanner',
    name: 'Scanner',
  },
  {
    id: 3,
    path: '/radio',
    name: 'Radio',
  },
];

const Navigation = ({ resetStates }) => {
  useEffect(() => {
    resetStates();
  }, []);

  return (
    <div className='nav'>
      {links.map((link) => (
        <Link key={link.id} className='nav-button' to={link.path}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};
export default Navigation;

Navigation.propTypes = {
  resetStates: PropTypes.func.isRequired,
};
