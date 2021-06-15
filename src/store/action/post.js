import * as api from '../../api/index'
import axios from 'axios'
export const Getpost=() =>{ 

return async(dispatch)=>{
    try {
        const data = await axios.get(`${api.url}/`)
        console.log( "get" + data)
        dispatch({
            type:"FETCHALL",
            payload: data
        })
    } catch (error) {
      console.log(error.response)  
    }
      
    }

}

export const createPost= (ispost) =>{
console.log(ispost)
    return async(dispatch)=>{
        try {
            const {data} =await  axios.post(`${api.url}`, ispost)
           
            dispatch({
                type:"CREATE",
                payload: data
            })
            console.log(data)
        }
        catch (error) {
          console.log(error.response)  
        }
          
        }
    }

export const Deletepost =  (id) =>{
console.log(id)
return  async(dispatch)=>{
   await api.API.delete(`posts/${id}`)
  
.then(()=>{
   
    dispatch({
        type: 'DELETE',
        payload : id
    })

})
.catch(error=>{
    console.log(error.message)
})

}

}

export const updated =(update, id) =>{
    console.log(id)
    return async(dispatch)=>{
        try{
        const {data }=await api.API.patch(`posts/${id}`, update)
 dispatch({
            type: 'UPDATE',
            payload : data
        })
        console.log(data)
    
}
    catch(error){
        console.log(error.message)
    }
    }
} 
export const likedaction = (id) =>{
    console.log(id)
    return async(dispatch)=>{

        try {
            const {data} =await api.API.patch(`posts/${id}/likePost`)
            dispatch({
               type: 'LIKE',
               payload : data
           }) 
           
        } catch (error) {
            console.log(error.message)
        }
      
        }
  
    
    } 
export const Searchpost= (ispost) =>{
    console.log(ispost)
        return async(dispatch)=>{
            try {
                const  {data} =await axios.post(`${api.url}/searchs`, ispost)
            //    console.log(data)
                dispatch({
                    type:"SEARCH",
                    payload: data
                })
            }
            catch (error) {
              console.log(error.response)  
            }
              
            }
        }
export const postdetail = (id)=>{

console.log(id)
return async(dispatch)=>{
try {
    const data = await  axios.post(`${api.url}/${id} `)
console.log(data)
    dispatch({
        type : "SINGLEPOST",
        payload : data
    }) 
} catch (error) {
    console.log(error.response)
}
  
}

}