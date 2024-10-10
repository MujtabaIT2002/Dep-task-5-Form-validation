import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationForm from './ReservationForm';
import SubmittedData from './SubmittedData';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <h1>Vite + React</h1>
        </header>
        <Routes>
          <Route path="/" element={<ReservationForm />} />
          <Route path="/submitted" element={<SubmittedData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
