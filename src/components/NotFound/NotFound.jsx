import { Message } from 'semantic-ui-react';
import './style.scss';

const NotFound = () => {
  return (
    <>
      <Message className='not-found' size='huge' negative>
        <Message.Header>404</Message.Header>
        <p>La page que vous recherchez n'existe pas</p>
      </Message>
    </>
  );
};
export default NotFound;
