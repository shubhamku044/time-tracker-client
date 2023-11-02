import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, TimeTracker, Projects, UnderDevelopment } from './container';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TimeTracker />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/development" element={<UnderDevelopment />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
