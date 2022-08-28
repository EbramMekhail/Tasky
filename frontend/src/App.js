import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Body from './components/Body';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import {register, reset} from './features/auth/authSlice'


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Body />
          <Routes>
            <Route path='/' element={<Dashboard/>}> </Route>
            <Route path='/login' element={<Login/>}> </Route>
            <Route path='/register' element={<Register/>}> </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
