import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css'
import Result from './pages/Result';
import Home from './pages/Home';
import Header from './components/Header';
import Detail from './pages/Detail';
import Explore from './pages/Explore';

function App() {

  return (     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/data' element={<Result />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='explore' element={<Explore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
