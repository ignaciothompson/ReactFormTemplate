import React, {ReactNode} from 'react';
import './layout.css';
import Sidebar from '../sidebar/sidebar.tsx';

interface LayoutProps{
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layoutContainer">
      
      <Sidebar />
      <div className='content'>
        {children}
      </div>
    </div>
  );
};

export default Layout;