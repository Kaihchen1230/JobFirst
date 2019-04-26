import React from 'react';

import NavBar from './navBar';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div style={{marginTop: "55px"}}>
    {children}
    </div>
    
  </>
)

export default Layout