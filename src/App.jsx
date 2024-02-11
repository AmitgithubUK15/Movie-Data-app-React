import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css'
import Result from './pages/Result';
import Home from './pages/Home';
import Header from './components/Header';
import Detail from './pages/Detail';
import Explore from './pages/Explore';
import WebseriesDetail from './pages/WebseriesDetail';
import Test from './pages/Test';

function App() {

  return (     <BrowserRouter>
      <Header/>
      <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/data/:searchdata' element={<Result />} />
        <Route path='/detail/:movieId/:title/:Genres/:type/:overview/:image' element={<Detail />}/>
        <Route path='/explore/' element={<Explore />} />
        <Route path='/seriesdetail/:movieId/:title/:Genres/:type/:treaser' element={<WebseriesDetail />} />
        <Route path='/test/:data' element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
