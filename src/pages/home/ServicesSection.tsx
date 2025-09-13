import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import CheapReplaceMant from "@/components/ServiceTiles/CheapReplaceMant";
import DataRecovery from "@/components/ServiceTiles/DataRecovery";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-center items-center">
        <h1>Services That We Provide</h1>
        <p className="max-w-[80ch] mt-10 mb-2">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-[20px]">
        <BatteryReplacement></BatteryReplacement>
        
        <CheapReplaceMant></CheapReplaceMant>
        <DataRecovery></DataRecovery>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl  col-span-6 md:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl  col-span-6 md:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl  col-span-12 md:col-span-4"></div>
        
      </div>
    </Container>
  );
};

export default ServicesSection;
