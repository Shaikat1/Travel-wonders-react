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
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center gap-2">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Services
      </NavLink>
        
  </div>
  <div className="navbar-end">
      {
        user ?
        
       <div className="flex items-center">
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
              <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn m-1">Dashboard</label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <Link to="/my-services"><li><a>My-Services</a></li></Link>
                  <Link to="/add-services"><li><a>Add-Services</a></li></Link>
                  <Link to="/my-schedules"><li><a>My-schedules</a></li></Link>
                  
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