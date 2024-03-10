import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import Tables from '../pages/tables/Tables'
import Layout from '../components/layout/Layout'
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='tables' element={<Tables />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter