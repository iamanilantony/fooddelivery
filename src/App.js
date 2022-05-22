import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';
import Product from './pages/home/Product';

function App() {
  return (
    <ThemeProvider theme={theme}>

    <BrowserRouter>
    <div className="App">   
        <Routes>
            <Route path="/" exact element={ <Home /> }/>
            <Route path="/product/:id" element={<Product />}/>
        </Routes>  
    </div>
    
  </BrowserRouter> 
    </ThemeProvider>

  );
}

export default App;
