import React, {useEffect} from 'react'
import Singlepost from './post/post'
import {Getpost} from '../../store/action/post'
import {useSelector,useDispatch} from 'react-redux'
export default function Post({ispost, setpost}) {
    const dispatch = useDispatch()
    const post = useSelector(state=> state.post)
      useEffect(() => {
      dispatch(Getpost())
   },[dispatch])
       return (
        <div>
           {post.map((item)=> <Singlepost key={item?._id} postitem={item} ispost = {ispost} setpost ={setpost}/>)}
        </div>
        )
}
