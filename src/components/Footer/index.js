import { Image, Segment } from 'semantic-ui-react';
import './style.scss';

const Footer = () => {
  return (
    <footer>
      <Segment className='footer' textAlign='center'>
        <p className='footer-content'>Site Web réalisé par Alexandre Monney 2022</p>
        <Image
          href='https://github.com/Alexandre-Monney/radiology-questions'
          className='footer-logo'
          src='../../../images/logo-github.png'
          alt=''
        />
      </Segment>
    </footer>
  );
};
export default Footer;
