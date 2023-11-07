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
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {
               services.map(service => <AllServicesCard key={service.id} service={service}></AllServicesCard>)
            }
            </div>
        </div>
    );
};

export default AllServices;