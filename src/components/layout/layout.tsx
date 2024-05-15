import React, {ReactNode, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './layout.css';
import Sidebar from '../sidebar/sidebar.tsx';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
    }else if(location.pathname === '/step4' || location.pathname === '/thanks'){
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
      {children}
      </div>
    </div>
  );
};

export default Layout