import React from 'react'
import { AppHeader, AppSidebar, AppContent, AppFooter } from "../components";


const AppLayout = () => {
  return (
    <div>
      <AppHeader />
      <div className='row'>
        <div className='col-lg-2 col-md-3 col-sm-3'>
          <AppSidebar />
        </div>
        <div className='col-lg-10 col-md-9 col-sm-9'>
          <AppContent />
        </div>
      </div>
      <AppFooter/>
    </div>
  )
}

export default AppLayout