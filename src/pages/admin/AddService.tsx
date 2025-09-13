import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, type FormEvent } from "react";

const AddService = () => {

    interface Service  {
        name:string;
        description:string;
        device:string[];
        price:number;

    }
  const [serviceName, setServiceName] = useState<Service>({
        name:"",
        description:"",
        device:[],
        price:0,
  });

  const handleChange = (field:keyof Service, value:string)=>{
    if(field ==="device"){
        setServiceName((prev)=>({...prev, device:value.split(",").map(d => d.trim())}));
    }else if(field==="price"){
        setServiceName((prev) =>({...prev, price:parseFloat(value) || 0}));
    }else{
        setServiceName((prev) =>({...prev, [field]:value}))
    }
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submited Service", serviceName);

 
   
  };
  return (
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
        <Input placeholder="device Name" type="text" onChange={(e) => handleChange('device', e.target.value)} />
        <Input placeholder="Price" type="text" onChange={(e) => handleChange("price", e.target.value)} />
        <Button type="submit" className="mt-8">Submit</Button>
      </form>
    </div>
  );
};

export default AddService;
