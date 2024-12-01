import React from 'react';
import '../styles.css'; 

const Layout = ({ children }) => {
  return (
    <div className='py-10'>
      {children} 
    </div>
  );
}

export default Layout;