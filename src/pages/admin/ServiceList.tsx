
import { useGetServices } from '@/api/admin-api/services/service.hook';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Trash2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';
//import  { useEffect, useState } from 'react';

const ServiceList = () => {
   
     interface Service  {
        name:string;
        description:string;
        devices:string[];
        price:number;

    }

    const queryClient = useQueryClient();
  const [serviceName, setServiceName] = useState<Service>({
        name:"",
        description:"",
        devices:[],
        price:0,
  });

    const handleChange = (field:keyof Service, value:string)=>{
    if(field ==="devices"){
        setServiceName((prev)=>({...prev, devices:value.split(",").map(d => d.trim())}));
    }else if(field==="price"){
        setServiceName((prev) =>({...prev, price:parseFloat(value) || 0}));
    }else{
        setServiceName((prev) =>({...prev, [field]:value}))
    }
  }

  const{mutateAsync, isError, isSuccess} = useMutation({
    mutationFn: async(data:Service) =>{
      return await fetch("http://localhost:5000/api/v1/services", {
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          'Content-Type':'application/json'
        }
      })
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['service']})
    }
  })

    const{data:services, isLoading } = useGetServices()
    console.log({isLoading, services, isError })
    if(isLoading){
        return <h1>Loading ....</h1>
    }

    if(isError){
        return <h1>Something went wrong</h1>
    }


    




  console.log(isError, isSuccess)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Submited Service", serviceName);

    await mutateAsync(serviceName)
   
  };
  

    

    return (
        // <div>
        //     <h4>Service List Page</h4>
        //     {
        //         data?.data?.data?.map((item) =>(<h1>{item?.name}</h1>) )
        //     }
        // </div>

<Container className='mt-20 border p-0 rounded-2xl'>
                <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.id}>
            <TableCell className="font-medium">{service.name}</TableCell>
            <TableCell>{service.description}</TableCell>
            <TableCell>{service.price}</TableCell>
            <TableCell className="text-right">
                <Button variant="destructive" className='cursor-pointer p-2 '><Trash2 /></Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Services</TableCell>
          <TableCell className="text-right">{services.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>

     <div className="my-8 border rounded w-[405px] p-2">
      <h4>Add Service Page</h4>

      <form onSubmit={handleSubmit} className="w-[400px] my-6 p-4">
       <Input
  placeholder="Service Name"
  type="text"
  value={serviceName.name}  // ✅ bind state
  onChange={(e) => handleChange("name",  e.target.value)}
/>
        <Input placeholder="Description" type="text" onChange={(e) => handleChange("description", e.target.value)} />
        <Input placeholder="device Name" type="text" onChange={(e) => handleChange('devices', e.target.value)} />
        <Input placeholder="Price" type="text" onChange={(e) => handleChange("price", e.target.value)} />
        <Button type="submit" className="mt-8">Submit</Button>
      </form>
    </div>
</Container>

    );
};

export default ServiceList;