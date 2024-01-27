import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css'
import Result from './pages/Result';
import Home from './pages/Home';

function App() {

  return (     <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/data' element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
