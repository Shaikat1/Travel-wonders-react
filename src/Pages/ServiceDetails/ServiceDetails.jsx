import { useLoaderData, } from "react-router-dom";
import Modals from "../../Components/Modal/Modals";


const ServiceDetails = () => {
    const service= useLoaderData();
    
    
    const {image,name,description,price,serviceProviderImage,serviceProviderName,area} = service
    return (
        <div>
            <section>
            <div className="dark:bg-violet-400">
            <div className='flex justify-center items-center flex-col'>
	<div className="flex flex-col space-x-4 justify-center items-center">
		<img alt="" src={serviceProviderImage} className="object-cover w-28 h-28 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1 justify-center items-center">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-semibold">{serviceProviderName}</a>
			<span className="text-xl  dark:text-gray-400">{area}</span>
		</div>
	</div>
	<div className='text-lg dark:text-gray-400'>
		{price} taka
	</div>
	</div>
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900">{name}</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">{description}</p>
                    <div className="flex flex-wrap justify-center">
                    <Modals service={service}></Modals>
                    </div>
                </div>
            </div>
            <img src={image} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
        </section>
        </div>
    );
};

export default ServiceDetails;