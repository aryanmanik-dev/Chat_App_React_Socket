import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './views/HomePage/HomePage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
