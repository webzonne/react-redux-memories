import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';


import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';
import {useDispatch } from 'react-redux';
import {getPosts }from './actions/posts'

const App = () =>{
    const [currentId, setcurrentId] = useState(null)
    // const datos = useSelector((state)=>{return state})
    // console.log(datos);
    const classes = useStyles();

    //xxxxxxxxxxxxxxxxx
     const dispatch = useDispatch();

     useEffect(()=>{
         dispatch(getPosts()) 
     },[currentId, dispatch])
    //xxxxxxxxxxxxxxxxxxxxxx


    return(
        <div>
        <Container maxidh = 'lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.images} src={memories} alt='memories' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justyfy='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setcurrentId={setcurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId}  setcurrentId={setcurrentId}/>
                        </Grid> 
                    </Grid>
                </Container>
            </Grow>
        </Container>
        </div>
    )
}

export default App;