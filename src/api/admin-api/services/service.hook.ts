import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";


export const useGetServices = ()=>{
    
    
    const servicesData = useQuery({
        queryKey:['service'],
        queryFn:getServices,
        select:(data) =>{
              const services = data?.data?.data?.map((service) =>({
        id:service._id,
        name:service.name,
        description:service.description,
        price:service.price

    }))
    return services
        },
    //gcTime:5000, // Cache time Controll in tanstack Query
    staleTime:10000,  //donat cache for some second in infinity
    });
    return servicesData
}