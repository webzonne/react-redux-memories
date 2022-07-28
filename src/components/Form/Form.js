import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import {useDispatch, useSelector} from 'react-redux';
import {createPosts, updatePost} from '../../actions/posts';

import useStyles from "./style";

const Form = ({currentId, setcurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dato = useSelector((state)=> currentId ? state.posts.find((p)=>p._id === currentId) : null);

  useEffect(()=>{
      if(dato)setPostData(dato)
  },[dato])

  const handleSubmit = (e) => {
      e.preventDefault();

      if(currentId){
        dispatch(updatePost(currentId,  postData))
      }else{
        dispatch(createPosts(postData))
      }
      Clear()
      
  };

  const Clear = ()=>{
    setcurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    }); 
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? 'Editing': 'Creating'} a Memory </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        ></TextField>
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></TextField>
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        ></TextField>
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        ></TextField>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button onClick={()=>Clear}
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          type="submit"
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
