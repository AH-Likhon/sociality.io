import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ForumIcon from '@mui/icons-material/Forum';
import WaterIcon from '@mui/icons-material/Water';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import avatarImg from './images/avatar.jpg';
import CardItem from './components/CardItem/CardItem';

const drawerWidth = {
  width: '250px',
  overflow: "hidden",
  scrollBehavior: 'smooth',
  position: 'relative'
};

const menuList = [
  {
    item: 'Notifications',
    icon: NotificationsNoneIcon
  },
  {
    item: 'Summary',
    icon: LiveTvIcon
  },
  {
    item: 'Publish',
    icon: SaveAsIcon
  },
  {
    item: 'Feed',
    icon: NotificationsNoneIcon
  },
  {
    item: 'Engage',
    icon: ForumIcon
  },
  {
    item: 'Listen',
    icon: WaterIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
  {
    item: 'Report',
    icon: SignalCellularAltIcon
  },
]



function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // <!----------------------- Left Menu Drawer -------------------------------!>

  const drawer = (
    <Box sx={{ backgroundColor: '#393D42', color: '#fff', }}>
      <Typography sx={{ textAlign: 'center', py: '10px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 2.95px 2.6px' }} variant='p' component="div">Sociality.io</Typography>
      <Grid container sx={{ height: 'auto' }}>
        <Grid item sx={{ backgroundColor: '#2A2F33', width: '65px', }}>
          <List sx={{ py: 5 }}>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon sx={{ color: '#fff' }} /> : <MailIcon sx={{ color: '#fff' }} />}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Grid>
        <Grid item>
          <List sx={{ py: 4 }}>
            {menuList.map((text, index) => (
              <ListItem sx={{ width: '184px', '&:hover': { backgroundColor: '#F55661', color: '#fff' } }} key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ mr: '-20px' }}>
                    <text.icon sx={{ color: '#F55661', '&:hover': { color: '#fff !important' } }} />
                  </ListItemIcon>
                  <ListItemText primary={text.item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Grid>
      </Grid>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const [firstDateArr, setFirstDateArr] = useState([]);
  const [secondDateArr, setSecondDateArr] = useState([]);
  const [firstDate, setFirstDate] = useState('');
  const [secondDate, setSecondDate] = useState('');


  // <!----------------------- Fetch Data -------------------------------!> 

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        // console.log(Object.values(data.posts_by_date)[1]);
        setFirstDate(Object.keys(data.posts_by_date)[0]);
        setFirstDateArr(Object.values(data.posts_by_date)[0]);

        setSecondDate(Object.keys(data.posts_by_date)[1]);
        setSecondDateArr(Object.values(data.posts_by_date)[1]);
      })
  }, []);


  return (
    <Box sx={{ display: 'flex', }} className="App">
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        {/* <!----------------------- Main Drawer -------------------------------!> */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`, } }}
      >
        <Box sx={{ display: 'flex ', alignItems: 'center', justifyContent: 'space-between', color: 'gray', my: 1, }}>
          <Box>
            <Button sx={{ color: 'gray', fontSize: { xs: '11px', md: '14px' }, textTransform: 'capitalize', fontWeight: '400', }}>
              <FiberManualRecordIcon sx={{ fontSize: '12px', mt: '-2px' }} />
              Published
            </Button>
            <Button sx={{ color: 'gray', fontSize: { xs: '11px', md: '14px' }, textTransform: 'capitalize', fontWeight: '400', }}>
              <FiberManualRecordIcon sx={{ fontSize: '12px', mt: '-2px', color: '#3AC183' }} />
              Scheduled
            </Button>
            <Button sx={{ color: 'gray', fontSize: { xs: '11px', md: '14px' }, textTransform: 'capitalize', fontWeight: '400', }}>
              <FiberManualRecordIcon sx={{ fontSize: '12px', mt: '-2px', color: '#F7BF38' }} />
              Need Approval
            </Button>
            <Button sx={{ color: 'gray', fontSize: { xs: '11px', md: '14px' }, textTransform: 'capitalize', fontWeight: '400', }}>
              <FiberManualRecordIcon sx={{ fontSize: '12px', mt: '-2px', color: '#FB6450' }} />
              Error
            </Button>
            <Button sx={{ color: 'gray', fontSize: { xs: '11px', md: '14px' }, textTransform: 'capitalize', fontWeight: '400', }}>
              <FiberManualRecordIcon sx={{ fontSize: '12px', mt: '-2px', color: '#67B1F2' }} />
              Notes
            </Button>
          </Box>
          <Avatar sx={{ cursor: 'pointer' }} alt="Avatar" src={avatarImg} />
        </Box>

        {/* <!----------------------- Card -------------------------------!> */}
        <CardItem date={secondDate} dateArr={secondDateArr} />
        <CardItem date={firstDate} dateArr={firstDateArr} />
      </Box>
    </Box>
  );
}

export default App;
