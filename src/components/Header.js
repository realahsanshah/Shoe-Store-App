import React from 'react';
import {AppBar,Typography,makeStyles,Toolbar,Button} from '@material-ui/core'
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      marginLeft:'auto',
      flexGrow:1
    },
    title: {
      flexGrow: 0,
      cursor:'pointer',
      marginRight:'10px'
    },
  }));
  
  

const Header = () => {
    const classes = useStyles();
    const navigate=useNavigate();
    return ( 
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} onClick={()=>navigate('/')}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.title} onClick={()=>navigate('/Products')}>
            Products
          </Typography>
          <Typography variant="h6" className={classes.title} onClick={()=>navigate('/Cart')}>
            Cart
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
     );
}
 
export default Header;