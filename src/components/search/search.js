import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Searchpost} from '../../store/action/post'
import {Paper, Typography, Button, TextField, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {useHistory,useLocation} from 'react-router-dom'
const useStyle = makeStyles({
    root:{
    
     
      alignSelf:'center',
      marginTop: 50
    }
  })
export default function Search (){
const dispatch = useDispatch()
const post = useSelector(state=> state.post)
const history = useHistory();
const [search , setsearch] = useState()
const classes = useStyle();
const Handleform =(e)=>{
    e.preventDefault()
   const title = search.trim()
    dispatch(Searchpost({title}))
    console.log(search)
}
    return (
      <Container>
        <div className={classes.root}>
            <Paper>
                
            
            <form >
            
             <TextField
            value={search}
            name = "Search"
            variant= "outlined"
            label= "Search"
            fullWidth ={true}
            onChange = {(e) =>setsearch(e.target.value)}
            ></TextField>
              <Button type="submit" onClick={Handleform} fullWidth ={true} size="large" color= "primary">Submit</Button>
            </form>
            </Paper>
        </div>
        </Container>
    )
}
