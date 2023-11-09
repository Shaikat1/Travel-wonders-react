import { useLoaderData } from "react-router-dom";
import SchedulesCard from "./SchedulesCard";

const Schedules = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div className="my-20">
            <div className="text-3xl font-bold text-center mb-7">
                <h1 className="underline">My Bookings</h1>
            </div>
            {
                services.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {
                    services.map(service => <SchedulesCard key={service._id} service={service}></SchedulesCard>)
                }
                </div>
                :
                <div className="font-bold text-4xl text-black flex items-center justify-center mt-32">
                <h1>No product Found</h1>
                </div> 
            }
        </div>
    );
};

export default Schedules;