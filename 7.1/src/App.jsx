import { BrowserRouter, Route, Routes,useNavigate } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';

function App() {
   
  return (
    <>
      <BrowserRouter>
      <AppBar/>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
function AppBar() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '10px', background: '#333', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
      <button style={{ color: 'black' }} onClick={() => navigate('/')}>Landing</button>
      <button style={{ color: 'black' }} onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  );
}

export default App;
