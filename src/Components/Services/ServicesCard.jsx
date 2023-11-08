import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {id,image,description,serviceProviderName,serviceProviderImage,price,name} = service
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex space-x-4">
		<img alt="" src={serviceProviderImage} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{serviceProviderName}</a>
		</div>
	</div>
	<div>
		<img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">
            {name}
            </h2>
		<p className="text-sm dark:text-gray-400">
            {description}
        </p>
	</div>
		<div className='text-center'>
			<Link to={`/services/${id}`}><button className='btn'>View Details</button></Link>
		</div>
</div>
        </div>
    );
};

export default ServicesCard;