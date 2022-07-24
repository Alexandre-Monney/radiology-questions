import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navigation = ({ resetStates }) => {
  useEffect(() => {
    resetStates();
  }, []);

  return (
    <div className='nav'>
      <Link className='nav-button' to='/irm'>
        IRM
      </Link>
      <Link className='nav-button' to='/scanner'>
        Scanner
      </Link>
      <Link className='nav-button' to='/radio'>
        Radio
      </Link>
    </div>
  );
};
export default Navigation;

Navigation.propTypes = {
  resetStates: PropTypes.func.isRequired,
};
