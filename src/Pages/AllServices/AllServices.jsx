import { useEffect, useState } from "react";
import AllServicesCard from "./AllServicesCard";


const AllServices = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch("Services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {
               services.map(service => <AllServicesCard key={service.id} service={service}></AllServicesCard>)
            }
            </div>
        </div>
    );
};

export default AllServices;