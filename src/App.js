// import React from 'react';
import Main from './Main';
import Display from './Display';
import Report from './Report';
import Add from './Add';
import Dashboard from'./Dashboard'
import Fbtable from './Fbtable';
import Instatable from './Instatable';
import Userposts from './Userposts';
import Tiktok from './Tiktok';
import Adminpost from './Adminpost';
import ZPanel from './ZPanel';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='Response' element={<Display />}></Route>
        <Route path='Report' element={< Report/>}></Route>
        <Route path='Add' element={<Add/>}></Route>
        <Route path='Adminpost' element={<Adminpost/>}></Route>
        <Route path='Dashboard' element={<Dashboard/>}></Route>
        <Route path='/Twitter' element={<Dashboard/>}></Route>
        <Route path='/Facebook' element={<Fbtable/>}></Route>
        <Route path='/Instagram' element={<Instatable/>}></Route>
        <Route path='/Tiktok' element={<Tiktok/>}></Route>
        <Route path='/Userposts' element={<Userposts/>}></Route>
        <Route path='/z' element={<ZPanel/>}></Route>
      </Routes>
    </>
  );
}

export default App;
