import { useEffect, useState } from "react";
import AllServicesCard from "./AllServicesCard";
import { useLoaderData } from "react-router-dom";


const AllServices = () => {
    const services = useLoaderData()
    const [input,setInput] = useState("")
    
    const handleInput = (event) =>{
        event.preventDefault()
        const input1= event.target.input.value;
        setInput(input1)
    }
    console.log(input)
    const searchResult=services.filter(service => service?.name.toLowerCase().includes(input?.toLowerCase()))
    console.log(searchResult)
    return (
        <div className="max-w-[1500px] mx-auto">
            <div className="text-center my-4">
            <form onSubmit={handleInput}>
            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" name="input"/>
            <input type="submit" value="Search" className="px-4 py-3 rounded-lg m-1 bg-[#1195b2] text-white hover:cursor-pointer"/>
            </form>
            </div>
            {
                input?
                <div>
                    {
                        searchResult.length > 0 ?
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                            {
                            services.map(service => <AllServicesCard key={service.id} service={service}></AllServicesCard>)
                            }
                            </div>
                        </div>
                        :
                        <div>
                            <h1 className="text-2xl font-medium text-center my-28">
                                No result
                            </h1>
                        </div>
                    }
                </div>
                :
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {
                    services.map(service => <AllServicesCard key={service.id} service={service}></AllServicesCard>)
                    }
                    </div>
                </div>

            }
        </div>
    );
};

export default AllServices;