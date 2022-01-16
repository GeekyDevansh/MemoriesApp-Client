// This is majorly responsible for connecting our client side to server side and enabling us to make api calls through url

import axios from 'axios';

const url = 'https://memoriesapp14.herokuapp.com/';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);  //createPost requires your new post as a parameter 
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`); 
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost); //updatePost requires id and your new post as a parameter
export const deletePost = (id) => axios.delete(`${url}/${id}`);  //deletePost requires id as a parameter