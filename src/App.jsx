import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Chat from './components/Chat';
import Profile from './components/Profile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/profile'>
          <Route path=':userId' element={<Profile/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
