import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/image/logo.jpeg"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogOut = async () => {
        try{
            await logOut();
            await axios ('https://newstally-server.vercel.app/logout', {withCredentials: true})
            navigate('/')
        } catch (error){
            console.log(error);
        }
      }

    return (
      <div className='navbar bg-base-100 shadow-sm container lg:px-20 mx-auto'>
        <div className='flex-1'>
          <div className='flex gap-2 items-center'>
            <img className='w-auto h-9' src={logo} alt='' />
            <span className='font-bold'>NewsTally</span>
          </div>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/all-blogs'>All Blogs</Link>
            </li>
            {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          </ul>
  
          { user && (
            <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full' title=''>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/add-blog' className='justify-between'>Add Blog</Link>
              </li>
              <li>
                <Link to='/my-blog'>My Blogs</Link>
              </li>
              <li>
                <Link to='/featured-blog'>Featured Blogs</Link>
              </li>
              <li>
                <Link to='/wishlist-blog'>Wishlist</Link>
              </li>
              <li className='mt-2'>
                <button onClick={handleLogOut} className='bg-gray-200 block text-center'>Logout</button>
              </li>
            </ul>
          </div>
          )}
        </div>
      </div>
    )
  }
  
  export default Navbar;