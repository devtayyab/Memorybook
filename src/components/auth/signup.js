import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Paper, Typography, Button, TextField, FilledInput} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';

import {createuser} from '../../store/action/auth'
const useStyle = makeStyles({
  root:{
    minWidth: 300,
    width: 600,
    alignSelf:'center',
    marginTop: 50
  }
})
export default function SignUp(){
const dispatch = useDispatch()
const post = useSelector(state=> state.post)
const [isuser , setuser] = useState({
    name: '', email : '' , password :'', confirmpassword : ''
  })
const classes = useStyle()
const Handleform =(e)=>{
    e.preventDefault()
    console.log(isuser)
   dispatch(createuser(isuser))
    setuser(
        {
            name: '', email : '' , password :'', confirmpassword : ''
          } 
        )
       }
       
   
    return (
        <div>
            <Paper className={classes.root}>
              <LockIcon></LockIcon>
            <Typography>SignUp</Typography>
            <form >
            <TextField
            value={isuser.name}
            name = "Fullname"
            variant= "outlined"
            label= "Fullname"
            fullWidth ={true}
            onChange = {(e) =>setuser({...isuser , name : e.target.value})}
            
            ></TextField>
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
             <TextField
            value={isuser.confirmpassword}
            name = "conpassword"
            variant= "outlined"
            label= "Rewrite Password"
            fullWidth ={true}
            onChange = {(e) =>setuser({...isuser , confirmpassword : e.target.value})}
            
            ></TextField>
           
              <Button type="submit" onClick={Handleform} fullWidth ={true} size="large" color= "primary">Submit</Button>
            </form>
            </Paper>
        </div>
    )
}
