import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {User} from './User'
import { Feedworker } from './Feedworker';
import { render } from '@testing-library/react';

const drawerWidth = 240;

export class  Navbar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            label: 'all'
        };
        this.setLabel = this.setLabel.bind(this)
        
      }

setLabel(text , e ){
console.log(text)
this.setState({label:text})
console.log('set state ')
}
    

render(){
  return (
    <div>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            News Bytes
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {['tech', 'politics', 'business', 'entertainment','sport'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text}  onClick={(e) => this.setLabel(text, e)}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
    
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar > <User/> </Toolbar>
      <Feedworker label={this.state.label} ></Feedworker>
      </Box>
    </Box>
    </div>
  )
}
}
export default Navbar;