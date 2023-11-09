import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Modals = ({service}) => {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const {user} = useContext(AuthContext)
    console.log(service)

    function onCloseModal() {
    setOpenModal(false);
    setEmail('');
    }
    const {image,name,description,price,serviceProviderImage,serviceProviderName,area} = service
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const serviceName = form.serviceName.value;
        const servicePhotoURL = form.servicePhotoURL.value;
        const price = form.price.value;
        const area = form.area.value;
        const service = {
          name,
          email,
          photoURL,
          serviceName,
          servicePhotoURL,
          price,
          area,
        }
        fetch("http://localhost:5000/my_booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire('Product added successfully')
        }
        form.reset()
      });

    };
    return (
        <div>
            <Button onClick={() => setOpenModal(true)}>Book Now</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
        <form onSubmit={handleSubmit}>
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7 text-black text-center">Add Your Service Details</h2>
            {/* <p className="mt-1 text-sm leading-6 text-gray-600 text-center">Use a permanent address where you can receive mail.</p> */}
  
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-full">
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
                  readOnly
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
                    readOnly
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
                    readOnly
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
                    defaultValue={name}
                    readOnly
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
                    defaultValue={image}
                    readOnly
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                  Area
                </label>
                <div className="mt-2">
                  <input
                    id="area"
                    name="area"
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                    required
                  />
                </div>
              </div>
  
              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-black">
                  Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="date"
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
                    defaultValue={price}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
               <button className="px-4 py-2 rounded-lg m-1 bg-[#1195b2] text-white cursor-pointer"><input type="submit" value="Purchase" className=' rounded-lg m-1 bg-[#1195b2] text-white hover:cursor-pointer'/></button>
              </div>
          </div>
        </form>
        </Modal.Body>
      </Modal>
        </div>
    );
};

export default Modals;