import React from 'react'
import Navbar from '../Navbar/Navbar'

import { Outlet } from "react-router-dom";


function SharedLayout() {
  return (
      <div>
          <Navbar></Navbar>
          {/* <ResNavbar></ResNavbar> */}
          <Outlet></Outlet>
      </div>
  );
}

export default SharedLayout