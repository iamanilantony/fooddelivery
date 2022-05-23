import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';
import Product from './pages/home/Product';
import Signin from './pages/home/Signin';

function App() {
  return (
    <ThemeProvider theme={theme}>

    <BrowserRouter>
    <div className="App">   
        <Routes>
            <Route path="/" exact element={ <Home /> }/>
            <Route path="/product/:id" element={<Product />}/>
            <Route path="/signin" element={<Signin />}/>
        </Routes>  
    </div>
    
  </BrowserRouter> 
    </ThemeProvider>

  );
}

export default App;
