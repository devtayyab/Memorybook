import axios from 'axios'

export const url = "https://memerie.herokuapp.com/posts";
export const userurl = "https://memerie.herokuapp.com/auth";


// export const url = "http://localhost:5000/posts";
// export const userurl = "http://localhost:5000/auth";
export const API = axios.create({ baseURL: 'https://memerie.herokuapp.com' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization =  `${JSON.parse(localStorage.getItem('token')).token}`;

  }

  return req;
});
// export const fetchpost = ()=> axios.get(url)

// export const createPost = (newpost)=> axios.post(url ,newpost)