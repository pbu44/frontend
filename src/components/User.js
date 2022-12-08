import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Userlogin from './login';
import Registeruser from './register'
import {Feedworker} from './Feedworker'


export class User extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            item : 'not'
        };
        this.handleClick = this.handleClick.bind(this)}
value = "user works"
navItems = ['Log In','Sign Up']
sucItem = ['User']
handleClick( item,e ){
    console.log('set login register ')
    this.setState({'item':item})
    }
render(){
    if(this.state.item=='not'){
    return(
        <div>
        <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {this.navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={(e) => this.handleClick(item,e)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Feedworker label={this.props.label} ></Feedworker>
      </div>
        )}
        else if(this.state.item=='Log In'){
                 return(
                   <Userlogin handleSubmit={()=>this.handleClick()}></Userlogin>
                 )
        }
        else if(this.state.item=='Sign Up'){
            return(
                <Registeruser handleSubmit={()=>this.handleClick()}></Registeruser>
            )
        }
        else {
            return(
                <div>
                <AppBar component="nav">
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  >
                    MUI
                  </Typography>
                  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {this.sucItem.map((item) => (
                      <Button key={item} sx={{ color: '#fff' }} onClick={(e) => this.handleClick(item,e)}>
                        {item}
                      </Button>
                    ))}
                  </Box>
                </Toolbar>
              </AppBar>
              <Feedworker label={this.props.label} ></Feedworker>
              </div>
                )}
}
}

