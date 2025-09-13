import { getServices } from '@/api/admin-api/services/service.api';
import { useGetServices } from '@/api/admin-api/services/service.hook';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useQuery } from '@tanstack/react-query';
import { Trash2 } from 'lucide-react';
//import  { useEffect, useState } from 'react';

const ServiceList = () => {
   
    

    const{data:services, isLoading , isError} = useGetServices()
    console.log({isLoading, services, isError })
    if(isLoading){
        return <h1>Loading ....</h1>
    }

    if(isError){
        return <h1>Something went wrong</h1>
    }

  

    

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
</Container>

    );
};

export default ServiceList;