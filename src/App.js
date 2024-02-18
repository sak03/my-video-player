import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/globalstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/videowatching.css'


const AppLayout = React.lazy(() => import('./app-layout/AppLayout'))

function App() {
  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route exact path='*' name='Home' element={<AppLayout/>}/>
          </Routes>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
