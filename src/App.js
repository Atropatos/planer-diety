import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './services/auth';
import LoginComponent from './components/LoginComponent/LoginComponent';
import ListComponent from './components/ListComponent';
//import HomeComponent from './HomeComponent'; // Ensure this component exists

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/" element={<LoginComponent />} />
          <Route path="/home" element={<ListComponent/>} />
          {/* <Route path="/home" element={<HomeComponent />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
