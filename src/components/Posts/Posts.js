import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId,currentId,setPostData }) => {
  const posts = useSelector((state) => state.posts); //We got all the posts from the state (or db).
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
       {/*We mapped all the posts and got post with different id and then passed them to post component as props*/}
        {posts.map((post) => (
          <Grid  key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} currentId={currentId} setPostData={setPostData}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;