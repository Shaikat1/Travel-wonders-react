

import Swal from "sweetalert2";

const MyServicesCard = ({myProduct}) => {
    const {serviceName,name,email,photoURL,_id,servicePhotoURL,price,area} = myProduct
    const handleDelete = (_id) => { 

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://tour-and-guide-server-side.vercel.app/my_services/${_id}`, {
            method: "DELETE",
            })
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
            if(data.deletedCount > 0){
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          });
          
        }
      })
       
    }
    return (
        <div className='mx-auto mt-14'>
            <div data-aos="zoom-in">
            <div className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
			<div className='flex justify-between items-center'>
	<div className="flex space-x-4">
		<img alt="" src={photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</a>
			<span className="text-xs text-lightBlue-700 dark:text-gray-400">{area}</span>
		</div>
	</div>
	<div className='text-xs text-lightBlue-700 dark:text-gray-400'>
		{price} taka
	</div>
	</div>
	<div>
		<img src={servicePhotoURL} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold text-center">
            {serviceName}
            </h2>
		<p className="text-sm dark:text-gray-400">
            
        </p>
	</div>
		<div className='text-center'>
			<button onClick={()=> handleDelete(_id)}className="btn">Delete</button>
		</div>
</div>
        </div>
        </div>
    );
};

export default MyServicesCard;