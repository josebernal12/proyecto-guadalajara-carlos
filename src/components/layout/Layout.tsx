import Header from "../header/Header"
import Sidebar from "../sidebar/Sidebar"
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className="grid h-screen min-h-screen  grid-cols-[300px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout