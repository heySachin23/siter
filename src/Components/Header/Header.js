import { Avatar } from '@mui/material'
import React from 'react'
import './Header.css'
import { blue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header({sidebarOpen, handleSidebarToggle}) {
  return (
    <div className='header-container'>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleSidebarToggle}
            // sx={{ mr: 2, display: { sm: 'none' } }}
          >
            {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        <h2 className='header-title'>Master Infra Link</h2>
        <Avatar className='header-avatar' sx={{width: 32, height: 32, fontSize: 16, bgcolor: blue[400] }}>SB</Avatar>
    </div>
  )
}
