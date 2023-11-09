

const SchedulesCard = ({service}) => {
    const {photoURL,name,serviceName,servicePhotoURL,price,area} = service
	console.log(service)
    return (
        <div className='mx-auto'>
            <div className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className='flex justify-between items-center'>
	<div className="flex space-x-4">
		<img src={photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
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
		<img src={servicePhotoURL} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"/>
		<h2 className="mb-1 text-xl font-semibold">
            {serviceName}
            </h2>
		<p className="text-sm dark:text-gray-400">
        </p>
	</div>
</div>
        </div>
    );
};

export default SchedulesCard;