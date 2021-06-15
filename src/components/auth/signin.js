import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Paper, Typography, Button, TextField, Avatar} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import {Signuser} from '../../store/action/auth'
import {useHistory,useLocation} from 'react-router-dom'
const useStyle = makeStyles({
    root:{
      minWidth: 300,
      width: 600,
      alignSelf:'center',
      marginTop: 50,
      left: 50
    },
  avt:  {
    position: 'absolute',
    left: 50
    }
  })
export default function SignIn(){
const dispatch = useDispatch()
const post = useSelector(state=> state.post)
const history = useHistory();
const [isuser , setuser] = useState({
    email : '' , password :''
  })
const classes = useStyle();
const Handleform =(e)=>{
    e.preventDefault()
    console.log(isuser)
    dispatch(Signuser(isuser))
    history.push("/")
    setuser(
        {
           email : '' , password :''
          } 
        )
       }
       
   
    return (
        <div className={classes.root}>
            <Paper>
               
                <LockIcon/>
            <Typography>SignIn</Typography>
            <form >
            
             <TextField
            value={isuser.email}
            name = "Email"
            variant= "outlined"
            label= "Email"
            fullWidth ={true}
            onChange = {(e) =>setuser({...isuser , email : e.target.value})}
            
            ></TextField>
             <TextField
            value={isuser.password}
            name = "Password"
            variant= "outlined"
            label= "Password"
            fullWidth ={true}
            onChange = {(e) =>setuser({...isuser , password : e.target.value})}
            
            ></TextField>
              <Button type="submit" onClick={Handleform} fullWidth ={true} size="large" color= "primary">Submit</Button>
            </form>
            </Paper>
        </div>
    )
}
