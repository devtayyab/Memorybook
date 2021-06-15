import axios from 'axios'
import {userurl} from '../../api/index'
export const createuser= (user) =>{
    console.log(user)
        return async (dispatch)=>{
            try {
                const data =await axios.post(`${userurl}/signup`, user)
                console.log(data)
                
                dispatch({
                    type:"CREATEUSER",
                    payload: data
                })
               
            }
            catch (error) {
              console.log(error.response)  
            }
              
            }
        }
        export const Signuser= (isuser) =>{
            console.log(isuser)
                return async(dispatch)=>{
                    try {
                        const data =await  axios.post(`${userurl}/signin`, isuser)
                        
                        dispatch({
                            type:"SIGNUSER",
                            payload: data
                        })
                  
                    }
                    catch (error) {
                      console.log(error.response)  
                    }
                      
                    }
                }
    export const Signout=()=>{

        return(dispatch)=>{
            dispatch({
                type:"SIGNOUT"
            })
        }
    }