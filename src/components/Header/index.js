import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

const Header = ({ headerMessage }) => {
  return (
    <header>
      <a href='/'>
        <Segment className='header-title' textAlign='center'>
          {headerMessage}
        </Segment>
      </a>
    </header>
  );
};
export default Header;

Header.propTypes = {
  headerMessage: PropTypes.string.isRequired,
};
