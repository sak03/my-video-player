import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routesList from '../../routes'

const AppContent = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Routes>
        {routesList.map((route, idx) => {
          return route.element && <Route key={idx} path={route.path} exact={route.exact} name={route.name} element={<route.element />} />
        })}
        <Route path='/' element={<Navigate to='Home' replace />} />
      </Routes>
    </Suspense>
  )
}

export default AppContent