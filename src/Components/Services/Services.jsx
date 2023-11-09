import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch("https://tour-and-guide-server-side.vercel.app/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    const sliceServices = services.slice(0,4)
    return (
        <div className="max-w-[1500px] mx-auto mt-28 ">
            <div>
            <h3 className="text-2xl font-bold sm:text-5xl mb-10 text-center">Our Services</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {
                sliceServices.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
            }
            </div>
            <div className="flex justify-center mt-5">
                <Link to="/services">
                <button type="button" className="px-4 py-3 rounded-lg m-1 bg-[#1195b2] text-white hover:cursor-pointer dark:bg-gray-100 dark:text-gray-800 mx-auto">All Services</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;