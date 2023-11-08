
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth"
import Swal from 'sweetalert2'
import { AuthContext } from "../AuthProvider/AuthProvider";

   




const Register = () => {
    const {loginWithGoogle,register}=useContext(AuthContext)
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const [photoURL, setPhotoURL] = useState(null);
const [name, setName] = useState(null);
const [error, setError] = useState(null);

const user = {photoURL,name,email,password}
console.log(user)
const navigate = useNavigate();

// get email and password
const handleRegister = () =>{

  if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/.test(password)){
    return setError("password should be at least 8 character, one uppercase and one special character")
  }else{
    setError("")

    register(email,password)

    .then(result=>{
      Swal.fire('Registration successful')

      // use navigate
      navigate("/")
      
      // update user information
      updateProfile(result.user, {
        displayName: name , photoURL: photoURL? photoURL : "https://i.ibb.co/SBQGmnX/blank-profile-picture-973460-960-720-1.png"
      }).then(() => {
       
      }).catch((error) => {
        console.log(error)
      });
      

    })
    .catch(error => {
      setError(error.message)
    })
  }
    
}

const handleLoginWithGoogle = () => {
    loginWithGoogle()
    .then(result => {
      Swal.fire('Registration successful')
      navigate("/")
      
    })
    .catch(error => {
      console.log(error)
    })
}
return (
        <div>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
	<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
	<p className="text-sm text-center dark:text-gray-400">Have an account?
		<Link to="/login"><a href="#" rel="noopener noreferrer" className="focus:underline hover:underline">Login</a></Link>
	</p>
	<div className="my-6 space-y-4">
		<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri" onClick={handleLoginWithGoogle}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
		
	</div>
	<div className="flex items-center w-full my-4">
		<hr className="w-full dark:text-gray-400"/>
		<p className="px-3 dark:text-gray-400">OR</p>
		<hr className="w-full dark:text-gray-400"/>
	</div>
	<form  action="" className="space-y-8">
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Name</label>
				<input onChange={(e)=> setName(e.target.value)} type="text" name="name" id="name" placeholder="shajjad" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			</div>
			<div className="space-y-2">
				<label htmlFor="photoURL" className="block text-sm">PhotoURL</label>
				<input onChange={(e)=> setPhotoURL(e.target.value)} type="text" name="photoURL" id="photoURL" placeholder="" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			</div>
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input onChange={(e)=> setEmail(e.target.value)} type="email" name="email" id="email" placeholder="example@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
				</div>
				<input onChange={(e)=> setPassword(e.target.value)} type="password" name="password" id="password" placeholder="********" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			</div>
		</div>
        <div>
            {
                error&&
                <h1 className="text-red-500">
                    {error}
                </h1>
            }
        </div>
		<button onClick={handleRegister} type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Register</button>
	</form>
</div>
        </div>
    );
};

export default Register;