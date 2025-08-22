import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import RegisterPage from './pages/register/register';
import LoginPage from './pages/login/login';
import UserLogin from './pages/login/userLogin';
import UserRegister from './pages/register/userRegister';
import { Toaster } from 'react-hot-toast'
import Dashboard from './pages/dashboard/dashboard';
import AdminDashboard from './pages/admin-dashboard/adminDashboard';
import Header from './components/header';
import Home from './pages/home/home';
import Features from './pages/home/feature';
import About from './pages/home/about';


function AppWrapper() {
  const location = useLocation()
  const showHeader = location.pathname === "/" || location.pathname === "/feature" || location.pathname === "/about";

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {showHeader && <Header />}
      <Routes path="/*">
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/ulogin" element={<UserLogin />}></Route>
        <Route path="/uregister" element={<UserRegister />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/feature" element={<Features />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/dashboard/:tenantId" element={<Dashboard />}></Route>
        <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
      </Routes>
    </>

  )
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;