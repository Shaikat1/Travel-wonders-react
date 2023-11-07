import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch("Services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    const sliceServices = services.slice(0,4)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {
                sliceServices.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
            }
            </div>
            <div>
                <Link to="/services">
                <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800">All Services</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;