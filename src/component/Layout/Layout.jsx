import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer';
import NavbarMain from '../NavbarMain/NavbarMain';
NavbarMain
export default function Layout() {
  return (<>
  <NavbarMain />
  <Outlet></Outlet>
  <Footer />
  </>
  )
}
