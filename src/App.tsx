import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Layout, TimeTracker, Projects } from './container';
 
function App() {
  return (
    <BrowserRouter>  
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<TimeTracker />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
