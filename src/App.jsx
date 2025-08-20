import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/register/register';
import LoginPage from './pages/login/login';
import UserLogin from './pages/login/userLogin';



function App() {
  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/ulogin" element={<UserLogin />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;