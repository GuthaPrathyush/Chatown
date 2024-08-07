import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Chat from './components/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
