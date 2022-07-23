import './style.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
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
