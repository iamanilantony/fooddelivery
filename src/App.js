import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>

    <BrowserRouter>
    <div className="App">   
        <Routes>
            <Route path="/" exact element={ <Home /> }/>
        </Routes>  
    </div>
    
  </BrowserRouter> 
    </ThemeProvider>

  );
}

export default App;
