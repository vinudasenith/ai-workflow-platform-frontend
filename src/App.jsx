import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/register/register';
import LoginPage from './pages/login/login';
import UserLogin from './pages/login/userLogin';
import UserRegister from './pages/register/userRegister';
import { Toaster } from 'react-hot-toast'
import Dashboard from './pages/dashboard/dashboard';
import AdminDashboard from './pages/admin-dashboard/adminDashboard';




function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes path="/*">
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/ulogin" element={<UserLogin />}></Route>
        <Route path="/uregister" element={<UserRegister />}></Route>
        <Route path="/dashboard/:tenantId" element={<Dashboard />}></Route>
        <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;