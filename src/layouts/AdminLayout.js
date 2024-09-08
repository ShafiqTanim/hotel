import React from 'react'
import Header from './include/header';
import Sidebar from './include/sidebar';

const AdminLayout = ({children}) => {
  return (
        <div className="main-wrapper">
            <Header />
            <Sidebar />
            <main>{children}</main>
        </div>
  )
}
export default AdminLayout;