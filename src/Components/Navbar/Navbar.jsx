import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut =()=>{
    logOut()
    .then()
  }
  console.log(user)
    return (
        <div>
            <div className="navbar bg-base-100">

  <div className="navbar-start">
    <img src="https://i.ibb.co/rwN8Dd8/istockphoto-942839478-612x612-removebg-preview.png" alt="" className="h-28"/>
  </div>
  <div className="navbar-center gap-4 font-medium text-2xl text-gray-500">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#1195b2]" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#1195b2]" : ""
        }
      >
        Services
      </NavLink>
        
  </div>
  <div className="navbar-end">
      {
        user ?
        
       <div className="flex items-center gap-3">
         <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  {user.displayName}
                </a>
              </li>
              <li><a>
                  {user.email}
                </a></li>
              <li><button onClick={handleLogOut}>Log Out</button></li>
            </ul>
          </div>
              <div className="dropdown dropdown-hover mr-10 ">
              <label tabIndex={0} className="px-4 py-3 rounded-lg m-1 bg-[#1195b2] text-white hover:cursor-pointer">Dashboard</label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-52 text-lg mt-4">
                  <Link to="/my-services"><li className="hover:text-[#1195b2] ">My-Services</li></Link>
                  <Link to="/add-services" className="hover:text-[#1195b2]"><li>Add-Services</li></Link>
                  <Link to="/my-schedules" className="hover:text-[#1195b2]"><li>My-schedules</li></Link>
                  
              </ul>
              </div>
       </div>

       :

       <div className="mr-8">
          <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Login
      </NavLink>
        </div>
         
      }
       </div>
</div>
        </div>
    );
};

export default Navbar;