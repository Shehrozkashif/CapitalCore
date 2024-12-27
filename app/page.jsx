
import Herosection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, statsData } from "@/data/landing";
import { Divide } from "lucide-react";

export default function Home(){


  return ( 
  
  <div className="mt-40 ">
   <Herosection/>

    <section className="py-20 bg-blue-50">

      <div  className="container mx-auto px-4">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8" >

        {statsData.map((statsData, index)=>(
          
          <div key={index} className="text-center" >
              <div className="text-4x1 font-bold text-blue-600 mb-2">
                 {statsData.value}</div>
              <div className="text-gray-600"> 
                {statsData.label}</div>

          </div>


        

        ))}

      </div>

      </div>

    </section>

    <section className="py-20">

        <div className="container mx-auto px-4" >

          <h2 className="text-3x1 font-bold text-center mb-12"> Evertyhing you need to mange your finances </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {featuresData.map((feature, index)=>(
            
            <Card key={index} className="p-6"> 
            <CardContent className="space-y-4 pt-4">
              {feature.icon}
              <h3 className="text-x1 font-semibold" >{feature.icon}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
          

          ))}

          </div>

        </div>


    </section>

  </div>





    
  
  );
}
