import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { Avatar, Chip, Container, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import Inventory from '../Views/Inventory';

export default function Dashboard() {
  const [view, setView] = useState('inventory')
  const handleViewChange = (ev) => { setView(ev.target.value) }

  return (
    <Container sx={{mt : 5, minWidth: '90%'}}>
      <Stack direction={'row'} alignItems='center'>
        <Typography variant='h5' >Gwalior Airport Building</Typography>
        <Avatar className='header-avatar' sx={{marginLeft: 2, width: 32, height: 32, fontSize: 16, bgcolor: blue[400] }}>AS</Avatar>
        <IconButton sx={{marginLeft: 1, color: grey[1000]}}><EditIcon /></IconButton>
      </Stack>
      <Stack direction={'row'} alignItems='center' justifyContent='space-between'>
        <Stack direction={'row'} alignItems='center'>
          <Typography variant='h6' >Gwalior</Typography>
          <Chip label="Active" color="success" variant="outlined" sx={{marginLeft:2}}/>
        </Stack>
        <FormControl sx={{marginLeft:2}}>
          <InputLabel id="select-view">View</InputLabel>
          <Select
            labelId="select-view"
            id="select-view"
            value={view}
            label="View"
            onChange={handleViewChange}
          >
            <MenuItem value={'attendance'}>Attendance</MenuItem>
            <MenuItem value={'inventory'}>Inventory</MenuItem>
            <MenuItem value={'work'}>Work</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Inventory />
    </Container>
  )
}
