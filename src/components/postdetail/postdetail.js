import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'

import {useDispatch, useSelector} from 'react-redux'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent : 'space-between'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
   
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    flexDirection:'row',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    justifyContent:'space-between'
  },
  playIcon: {
    height: 38,
    width: 'auto',
    paddingLeft: theme.spacing(2),
  },
}));

export default  function Postdetail() {
 const [post , setpost] = useState([])
  const classes = useStyles();
  const theme = useTheme();
const state= useSelector(state=> state.post)
console.log(state)
useEffect(() => {
  setpost(state)
})

  return(
    <div>
   {post.map((postt)=>(
    
      <Card className={classes.root}>
        {console.log(postt)}
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h4" variant="h4">
            {postt.post?.title}
          </Typography>
          <Typography component="p" variant="p">
            {moment(postt.post?.createdAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
           { postt.post?.message}
          </Typography>
          
        </CardContent>
        <div className={classes.controls}>
        <Typography variant="subtitle0" color="textSecondary" className={classes.playIcon}>
      { ` tags: # ${postt?.post?.tags}`}
           </Typography>
      
          <Typography variant="subtitle" color="textSecondary" className={classes.playIcon}>
       likes: { postt?.post?.likecount}
          </Typography>
          </div>
      </div>
      <div>
      <Typography variant="subtitle" color="textSecondary">
       creator: { postt?.post?.name}
          </Typography>
          </div>
         <CardMedia
        className={classes.cover}
        image={postt?.post?.selectedfile}
        title={postt?.post?.message}
        
      />
      
    </Card>
  
   ))}
  </div>
  )
}
