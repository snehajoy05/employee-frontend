import Sidebar from '../components/sidebar/sidebar';
import Header from '../components/header/header';
import { FC } from 'react';
import './Layout.css';
const Layout: FC = (props) => {
  return (
    <div className='outer'>
      <Header />
      <body className='body'>
        <div>
          <Sidebar />
        </div>
        <div>{props.children}</div>
      </body>
    </div>
  );
};

export default Layout;
