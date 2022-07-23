import { Segment } from 'semantic-ui-react';
import './style.scss';

const Header = () => {
  return (
    <header>
      <a href='/'>
        <Segment className='header-title' textAlign='center'>
          Bienvenue sur Radiology Questions
        </Segment>
      </a>
    </header>
  );
};
export default Header;
