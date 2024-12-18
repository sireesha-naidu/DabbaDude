import DashboardSignin from './Components/DashboardSignin';
import DashboardSignup from './Components/DashboardSignup';
import { Routes, Route } from 'react-router-dom';
import DashboardMain from './Components/DashboardMain';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardSignin />} />
      <Route path="/dashboard-signup" element={<DashboardSignup />} />
      <Route path="/dashboard/*" element={<Dashboard/>} />
    </Routes>
  )}

export default App;
