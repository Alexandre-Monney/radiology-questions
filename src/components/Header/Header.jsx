import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

const Header = ({ message }) => {
  return (
    <header>
      <a href='/'>
        <Segment className='header-title' textAlign='center'>
          {message}
        </Segment>
      </a>
    </header>
  );
};
export default Header;

Header.propTypes = {
  message: PropTypes.string.isRequired,
};
