import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Colors } from "../styles/theme/index";
import { Favorite } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ 
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            width: "100%",
            flexGrow: 1 , 
            margin: 0 ,
            height: 300,
            zIndex: 10}}>
      <AppBar position="static" 
        // sx= {{}}
        style={{color:Colors.white ,  background: Colors.danger , borderRadius: '0px' ,width: "100%", alignSelf: "center"}}>
        <Toolbar 
        sx={{ justifyContent:'space-between' }}>
            <Box
            sx={{ display: "flex", alignItems:"center"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"        
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: "none", color:"white"}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight:'600',fontSize:"30px", flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
            >
            yummy.
          </Typography>
          </Link>
          </Box>
      
          <Search  
            style={{ width: "50%", color: Colors.white , border: "1px Solid white" , borderRadius: '20px' }}
            >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              style={{ width: '64vp', color: Colors.white }}  
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
            
           
          </Search>
         
          <Box
            sx={{ display: "flex", alignItems: "center"}}>

          <Button variant="contained" color='error' sx={{marginRight:2, display:{xs:"none",sm:"flex"}} } startIcon={<Favorite />}>Favourites</Button> 
          <Button variant="contained" color='error'  startIcon={<ShoppingCartOutlinedIcon />}>Cart</Button>
          
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
