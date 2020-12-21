import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import {useStyles} from '../SideBarStyle';

function NavBar (){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" color="secondary"
              className={clsx(classes.appBar, {
              })}>
                <Toolbar >
                    <Typography variant="h3" color="inherit">
                        Crypto Currencies Watch
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}         
export default NavBar;


 
    
    


              
