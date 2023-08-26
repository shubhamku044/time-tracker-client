import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Layout, TimeTracker, Projects, UnderDevelopment } from './container';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<TimeTracker />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/development' element={<UnderDevelopment />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
