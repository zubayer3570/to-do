import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddWork from './components/AddWork';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <RequireAuth>
          <Home />
        </RequireAuth>
      } />
      <Route path='/addwork' element={
        <RequireAuth>
          <AddWork />
        </RequireAuth>
      } />
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
    </Routes>
  )
}

export default App;
