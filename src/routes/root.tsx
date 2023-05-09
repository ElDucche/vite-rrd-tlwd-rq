import { Outlet } from "react-router-dom"



const Layout = () => {

  return (
      <div className="relative">
        <nav className='border-b border-black p-4 flex items-center justify-between fixed w-screen top-0 bg-white z-10'>
            <a href="#">Home</a>
            <a href="#">Example</a>
        </nav>
        <div className="mt-28 md:mt-40 mb-6">
            <Outlet />
        </div>
      </div>
  )
}

export default Layout