import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); //-->Ye humare backend ya db se data (posts) la rha hai

    dispatch({ type: FETCH_ALL, payload: data }); //We got the data from our server or db using the api calls from axios and we use that data as the payload
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {     //async(dispatch) milta hai redux thunk se
  try {
    const { data } = await api.createPost(post);  //-->Ye humare backend ya db ko data (posts) bhej rha hai

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};