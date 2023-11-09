import { useLoaderData } from "react-router-dom"

import { useEffect, useState } from "react";
import MyServicesCard from "./MyservicesCard";


const MyServices = () => {
    const products = useLoaderData()
    const [myProducts,setMyProducts] = useState([]);
    useEffect(() => {
        setMyProducts(products)
    },[products])
    
    
    // console.log(products)
    return (
        <div className="max-w-[1300px] mx-auto">

            {
                myProducts.length === 0 ?
                <div className="font-bold text-4xl text-black flex items-center justify-center mt-32">
                <h1>No product Found</h1>
                </div> 
                :
                <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-3">
                {
                myProducts?.map(myProduct => <MyServicesCard key={myProduct._id} myProduct={myProduct}></MyServicesCard>)
                }
        </div>
                </div>
            }
            
            
        </div>
    );
};

export default MyServices;