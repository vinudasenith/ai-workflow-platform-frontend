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
import SuperAdmin from './pages/super-admin-dashboard/superAdminDashboard';
import AdminUsersManagment from './pages/admin-dashboard/adminUsersManagment';
import AdminDepartment from './pages/dashboard/departmentAdmin';
import DepartmentManagment from './pages/department-admin-dashboard/departmentManagment';
import UserManagment from './pages/department-admin-dashboard/userManagment';
import Operations from './pages/staff-dashboard/operation';
import StaffAdmin from './pages/dashboard/staff';
import TaskManagment from './pages/staff-dashboard/taskManagment';
import Task from './pages/staff-dashboard/task';
import UserDashboard from './pages/dashboard/user';
import WorkflowTask from './pages/user-dashboard/workflowTask';
import OrganizationManagment from './pages/super-admin-dashboard/organizationManagment';


function AppWrapper() {
  const location = useLocation()
  const showHeader = location.pathname === "/" || location.pathname === "/feature" || location.pathname === "/about";

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {showHeader && <Header />}
      <Routes path="/*">

        {/* Authentication */}
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/ulogin" element={<UserLogin />}></Route>
        <Route path="/uregister" element={<UserRegister />}></Route>

        {/* Home */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/feature" element={<Features />}></Route>
        <Route path="/about" element={<About />}></Route>

        {/* Dashboard */}
        <Route path="/dashboard/:tenantId" element={<Dashboard />}></Route>
        <Route path="/dashboard/:tenantId/departmentAdmin" element={<AdminDepartment />}></Route>
        <Route path="/dashboard/:tenantId/staff" element={<StaffAdmin />}></Route>
        <Route path="/dashboard/:tenantId/users" element={<  UserDashboard />}></Route>

        {/* Staff-Admin Dashboard */}
        <Route path="/dashboard/:tenantId/staff/taskManagment" element={<TaskManagment />}></Route>
        <Route path="/dashboard/:tenantId/staff/taskManagment/operations/tasks" element={<Task />}></Route>
        <Route path="/dashboard/:tenantId/staff/taskManagment/operations" element={<Operations />}></Route>

        {/* User-Admin Dashboard */}
        <Route path="/dashboard/:tenantId/users/workflows" element={<WorkflowTask />} />


        {/* Department-admin Dashboard */}
        <Route path="/dashboard/:tenantId/departmentAdmin/departmentManagment" element={<DepartmentManagment />}></Route>
        <Route path="/dashboard/:tenantId/departmentAdmin/userManagment" element={<UserManagment />}></Route>

        {/*Oranization-admin Dashboard */}
        <Route path="/admin/:tenantId" element={<AdminDashboard />}></Route>
        <Route path="/admin/:tenantId/users" element={<AdminUsersManagment />}></Route>

        {/* Super-admin Dashboard */}
        <Route path="/superadmin" element={<SuperAdmin />}></Route>
        <Route path="/superadmin/organizations" element={<OrganizationManagment />}></Route>

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