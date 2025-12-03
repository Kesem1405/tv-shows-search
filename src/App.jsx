import Dashboard from './components/dashboard/Dashboard.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
