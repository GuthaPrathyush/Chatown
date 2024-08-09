import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Chat from './components/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/chat' element={<Chat name="Jitendra"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
