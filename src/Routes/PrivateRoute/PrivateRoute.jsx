import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
        if(loading){
            return <div className="flex justify-center items-center mt-20 md:mt-32 lg:mt-48"><Spinner className="h-10 w-10" /></div>
        }
        if(user){
            return children;
        }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;