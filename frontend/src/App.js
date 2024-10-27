
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from '../src/components/UserContext.js';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import SignUpComponent from './components/SignUpComponent';
import JobComponent from './components/JobComponent';
import HRJobsComponent from './components/HRJobsComponent';
import EmployeeJobsComponent from './components/EmployeeJobsComponent';
import AdminDashboard from './components/AdminDashboard.js';
import AppliedJobsComponent from './components/AppliedJobsComponent.js';
import ProfileComponent from './components/ProfileComponent.js';
import HomePageComponent from './components/HomePageComponent.js';

function App() {
  return (
    <UserProvider>
      <div>
        <header>
          <Router>
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/home" element={<HomeComponent />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/signup" element={<SignUpComponent />} />
              <Route path="/job" element={<JobComponent />} />
              <Route path="/hr-job" element={<HRJobsComponent />} />
              <Route path="/emp-job" element={<EmployeeJobsComponent />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/applied-jobs" element={<AppliedJobsComponent />} />
              <Route path="/profile" element={<ProfileComponent />} />
              <Route path="/homepage" element={<HomePageComponent />} />

            </Routes>
          </Router>
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
