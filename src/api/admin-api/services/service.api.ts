import axios from "axios"
export const getServices = async()=>{
         return await  axios.get("http://localhost:5000/api/v1/services")
          
    }



// export const getServices = async()=>{
//          const res = await  fetch("http://localhost:5000/api/v1/servicess")
//             .then(res => res.json());

//             if(!res.success){
//                 throw new Error("Something Went Wrong")
//             }

//             return res;
//     }

//AterNative


