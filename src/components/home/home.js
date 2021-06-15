import Posts from '../posts/posts'
import React, {useEffect , useState} from 'react'
import Form from '../form/form'
import Search from '../search/search'
import {useDispatch ,useSelector} from 'react-redux'
import {Getpost} from '../../store/action/post'
import {Container,Typography,makeStyles,Grow, Grid , Card} from '@material-ui/core'
import {Route} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  form:{
    position:'fixed'
  }
}))
function Home({match}) {
const dispatch = useDispatch()
const [users , setuser] = useState(JSON.parse(localStorage.getItem('token'))
)
 const state = useSelector(state=> state)
const classes = useStyles()
const [ispost , setpost] = useState({
 creator: users?.result?._id,  name: users?.result?.name, title : '' , message :'', tags : '', selectedfile : ''
})
useEffect(()=>{
  // dispatch(Getpost)
  setuser(JSON.parse(localStorage.getItem('token')))
}, [dispatch,state])
useEffect(()=>{
  dispatch(Getpost)

}, [dispatch])
  return (
    <div className="App">
     <Container maxidth='lg'>
       
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch">
          <Search/>
            <Grid item xs={12} sm={7}>
              <Posts ispost={ispost} setpost={setpost}></Posts>
            </Grid>
            <Grid item xs={12} sm={5} className="classes.form"> 
             {users?.result ?  <Form ispost={ispost} setpost ={setpost}></Form> : 
             
             <Card>
                <Typography>Log in for add post!</Typography>
             </Card>
             }
            

             </Grid>
          </Grid>
        </Container>
      </Grow>

     </Container>
    </div>
  );
}
export default Home;
