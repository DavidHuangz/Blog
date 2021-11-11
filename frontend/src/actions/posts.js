import * as api from '../api';
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const FETCH_ALL = 'FETCH_ALL';
const LIKE = 'LIKE';

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const {data} = await api.fetchPosts();
    dispatch({type: FETCH_ALL, payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const {data} = await api.createPost(post);
    dispatch({type: CREATE, payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const {data} = await api.updatePost(id, post);
    dispatch({type: UPDATE, payload: data});
  } catch (error) {
    console.log(error);
  }
};
