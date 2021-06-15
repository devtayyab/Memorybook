import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createPost, updated} from '../../store/action/post'
import {Paper, Typography, Button, TextField, FilledInput} from '@material-ui/core'
import FileBase from 'react-file-base64'
export default function Form({ispost,setpost}) {
const dispatch = useDispatch()
const post = useSelector(state=> state.post)
const [updatepost , setpostitem] = useState()
   

const Handleform =(e)=>{
    e.preventDefault()
    const user = localStorage.getItem('token')
    console.log(ispost)
    if(ispost._id){
        dispatch(updated(ispost, ispost._id))
    }
    else{
    dispatch(createPost(ispost))
    }
    setpost(
        {
            creator: user?.result?._id,   name: user?.result?.name, title : '' , message :'', tags : '', selectedfile : ''
          } 
        )
       }
       
   
    return (
        <div>
            <h1>Forms</h1>
            <Paper>
            <Typography>Create Memories</Typography>
            <form >
        
             <TextField
            value={ispost.title}
            name = "Title"
            variant= "outlined"
            label= "Title"
            fullWidth ={true}
            onChange = {(e) =>setpost({...ispost , title : e.target.value})}
            
            ></TextField>
             <TextField
            value={ispost.message}
            name = "Message"
            variant= "outlined"
            label= "Message"
            fullWidth ={true}
            onChange = {(e) =>setpost({...ispost , message : e.target.value})}
            
            ></TextField>
             <TextField
            value={ispost.tags}
            name = "Tags"
            variant= "outlined"
            label= "Tags"
            fullWidth ={true}
            onChange = {(e) =>setpost({...ispost , tags : e.target.value})}
            
            ></TextField>
           

            <div >
        <FileBase
        type= "file"
        multiple = {false}
        onDone= {({base64})=>setpost({...ispost, selectedfile : base64 })}
        ></FileBase>

            </div>
            <Button type="submit" onClick={Handleform} fullWidth ={true} size="large" color= "primary">Submit</Button>
            </form>
            </Paper>
        </div>
    )
}
