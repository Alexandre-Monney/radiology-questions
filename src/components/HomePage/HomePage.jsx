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

const HomePage = () => {
  return (
    <>
      <Header message='Bienvenue sur Radiology Questions' />
      <div className='nav'>
        {links.map((link) => (
          <Link key={link.short} className='nav-button' to={`/${link.short}`}>
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};
export default HomePage;
