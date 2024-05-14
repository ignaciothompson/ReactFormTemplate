import React, {ReactNode, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './layout.css';
import Sidebar from '../sidebar/sidebar.tsx';

interface LayoutProps {
  children: ReactNode;
  order: Order; // Pass order to children
}

interface Order {
  plan: string;
  time: string;
  extraOptions: {
    online: [string, number] | [];
    storage: [string, number] | [];
    profile: [string, number] | [];
  };
}

interface ChildWithOrder extends React.ReactElement {
  props: {
    order?: Order;
  };
}

const Layout: React.FC<LayoutProps> = ({ children, order }) => {
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/'){
      document.querySelector('.one')?.classList.add('active');  
      document.querySelector('.two')?.classList.remove('active');
      document.querySelector('.three')?.classList.remove('active');
      document.querySelector('.four')?.classList.remove('active');
    }else if(location.pathname === '/step2'){
      document.querySelector('.two')?.classList.add('active');
      document.querySelector('.one')?.classList.remove('active');
      document.querySelector('.three')?.classList.remove('active');
      document.querySelector('.four')?.classList.remove('active');
    }else if(location.pathname === '/step3'){
      document.querySelector('.three')?.classList.add('active');
      document.querySelector('.one')?.classList.remove('active');
      document.querySelector('.two')?.classList.remove('active');
      document.querySelector('.four')?.classList.remove('active');
    }else if(location.pathname === '/step4'){
      document.querySelector('.four')?.classList.add('active');
      document.querySelector('.one')?.classList.remove('active');
      document.querySelector('.two')?.classList.remove('active');
      document.querySelector('.three')?.classList.remove('active');
    }
  }, [location.pathname]);

  return (
    <div className="layoutContainer">
      <Sidebar />
      <div className='content'>
      {React.isValidElement(children) ? React.cloneElement(children as ChildWithOrder, { order }) : children}
      </div>
    </div>
  );
};

export default Layout