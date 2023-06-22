import { Outlet } from "react-router-dom"
import Sidebar from "../screens/sidebar/Sidebar"

const Mainlayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default Mainlayout
