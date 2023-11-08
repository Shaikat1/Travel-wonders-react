
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AddServices = () => {
    const {user} = useContext(AuthContext);

    
    const handleSubmit = (event) =>{
      event.preventDefault()
      const form = event.target;
      console.log(form)
      const name = form.name.value;
      const email = form.email.value;
      const photoURL = form.photoURL.value;
      const serviceName = form.serviceName.value;
      const servicePhotoURL = form.servicePhotoURL.value;
      const description = form.description.value;
      const price = form.price.value;
      const area = form.area.value;
      const service = {
        name,
        email,
        photoURL,
        serviceName,
        servicePhotoURL,
        description,
        price,
        area,
      }
      console.log(service)
      
    }

    return (
      <div className="pb-28">
        <div className=" mx-auto max-w-[1300px] mt-20 bg-blue-gray-50 text-black px-10 pt-10">
        <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7 text-black text-center">Add Your Service Details</h2>
            {/* <p className="mt-1 text-sm leading-6 text-gray-600 text-center">Use a permanent address where you can receive mail.</p> */}
  
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-black">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                  defaultValue={user?.displayName}
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-black">
                 Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                    defaultValue={user?.email} 
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                  Photo URL
                </label>
                <div className="mt-2">
                  <input
                    id="photoURL"
                    name="photoURL"
                    type="text"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                    defaultValue={user?.photoURL}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                  Service Name
                </label>
                <div className="mt-2">
                  <input
                    id="serviceName"
                    name="serviceName"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                    
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                  Service Photo URL
                </label>
                <div className="mt-2">
                  <input
                    id="servicePhotoURL"
                    name="servicePhotoURL"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                    
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-black">
                  Service Area
                </label>
                <div className="mt-2">
                  <select
                    id="area"
                    name="area"
                    autoComplete="area-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 pl-3"
                  >
                    <option>Dhaka</option>
                    <option>Rangpur</option>
                    <option>Rajshahi</option>
                    <option>Mymensingh</option>
                    <option>Chitagong</option>
                    <option>Khulna</option>
                    <option>Barisal</option>
                    <option>Sylhet</option>
                  </select>
                </div>
              </div>
  
              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-black">
                  Short Description
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="description"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 h-14"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-black">
                 Price
                </label>
                <div className="mt-2">
                  <input
                    
                    type="text"
                    name="price"
                    id="price"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
               <button className="btn bg-blue-gray-400 text-black hover:bg-blue-gray-600 border-0 px-11"><input type="submit" value="Add"/></button>
              </div>
          </div>
        </form>
      </div>
      </div>
    );
  };
  
  export default AddServices;