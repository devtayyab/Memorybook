import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import {ButtonBase} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useDispatch, useSelector} from 'react-redux'
import {Deletepost,likedaction,postdetail} from '../../../store/action/post'
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth:700,
    display: 'inline-flex',
    margin:'8px',
  

  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 250,
    height: 350
  },
media :{
  height: 0,
  paddingTop: '56.25%', // 16:9
},
expand: { 
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
},
expandOpen: {
  transform: 'rotate(180deg)',
},
avatar: {
  backgroundColor: red[500],
}
}));

export default function Singlepost({postitem, ispost ,setpost}) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('token')));
  console.log("user is" , user?.result?.name)
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory()
// 
  const Deletefun = (id)=>{
    dispatch(Deletepost(id))
}

const updatepost= (id)=>{
  setpost(postitem)
    console.log(ispost)
} 
const likedposts = (id) =>{
  console.log(id)
  dispatch(likedaction(id))
}
const Singlepage=(e)=>{

history.push(`/posts/${e}`)
dispatch(postdetail(e))
}

  return (
    <div className={classes.root}>
     
          
           
          <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} height={140}/>
         
        }
    
        action={postitem?.creator == user?.result?._id ?
          <IconButton aria-label="share" onClick = {()=>updatepost(postitem._id)}><MoreVertIcon />
          
          </IconButton>: null 

           }
        title={postitem?.name}
        subheader={postitem?.createdAt}
      />
          <ButtonBase onClick={()=>Singlepage(postitem._id)} >
      <div>
   
      <CardMedia
        className={classes.media}
        image={postitem?.selectedfile}
      > 
      {postitem?.title}
      <br></br>
      
      </CardMedia>
 
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {postitem?.message}
        </Typography>
      </CardContent>
      
      </div>
      </ButtonBase>
      <CardActions disableSpacing>

        <IconButton aria-label="add to favorites" onClick = {()=>likedposts(postitem._id)}>
          <FavoriteIcon />{postitem?.likecount}
        </IconButton>
        #{postitem?.tags}
        {postitem?.creator == user?.result?._id ? <IconButton aria-label="share" onClick={()=> Deletefun(postitem._id)}><DeleteIcon /></IconButton>: null}
       
      </CardActions>
    
          </Card>

         
    </div>
  );
}
