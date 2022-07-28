import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';

import useStyles from './style';

const Posts = ({setcurrentId})=>{

const classes = useStyles();

//REDUXxxxxxxxxxxxxxxxxxxxxx
const posts = useSelector((state)=> state.posts);
//console.log(posts)
//REDUXxxxxxxxxxxxxxxxxxxxxx


    return(

        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {
                    posts.map((p)=>(
                        <Grid key={p._id} item xs={12} sm={6}>
                            <Post post={p} setcurrentId={setcurrentId}/>
                        </Grid>
                    ))};

            </Grid>
        )

        // <div>
        //     {!posts.leght ? <CircularProgress/> :
        //     <Grid>

        //     </Grid>}
        // </div>
    )
}

export default Posts;