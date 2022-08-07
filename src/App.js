import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Detail from './pages/detail/Detail';
import LandingPage from './pages/LandingPage';
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
        <Route path="/" element={<LandingPage />} />
          <Route path=':detail/:id' element={<Detail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
