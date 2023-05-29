import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Layout, TimeTracker, Projects, UnderDevelopment } from './container';
import { getTimerData } from './store/actions';
import { useAppDispatch } from './hooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTimerData());
  }, []);

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
