import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from  'react-router-dom'

import {Signout} from '../../store/action/auth'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color : "white"
  },
}));

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('token')));
  const classes = useStyles();
  const dispatch = useDispatch();
    const state=useSelector(state=> state.user)
    console.log("navbar " + state)
useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('token')));
    
}, [state])
const Logout=()=>{
  console.log("logout")
  dispatch(Signout())
}
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Memories
          </Typography>
{!user ? 
<div>
<Link to="/signin"  className={classes.title}>Login</Link> <Link to="/signup" className={classes.title} >Register</Link>

</div>:<div>

  <Button color="inherit" onClick={()=>Logout()}>Logout</Button>
<Typography variant="h6" className={classes.title}>
            {user?.result?.name}
          </Typography>

</div> }
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
