import { Divider, Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  function handleSidebarToggle() { setSidebarOpen(!sidebarOpen) }

  return (
    <>
      <Stack>
        <Header sidebarOpen={sidebarOpen} handleSidebarToggle={handleSidebarToggle} />
        <Divider />
        <Dashboard />
        <Sidebar sidebarOpen={sidebarOpen} handleSidebarToggle={handleSidebarToggle} />
      </Stack>
    </>
  );
}

export default App;
