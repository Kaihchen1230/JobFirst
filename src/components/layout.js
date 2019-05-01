import React from 'react';

import NavBar from './navBar';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div style={{}}>
    {children}
    </div>
    
  </>
)

export default Layout