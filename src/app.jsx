import React from "react";
import Canvas from "./canvas";
const data = [ {
  id: "1",
  name: "Pencil",
  value: 60
  
  
}, {
  id: "2",
  name: "Scale",
  value: 15
   
},
{
  id:"3",
  name:"Eraser",
  value: 45
  
  
},
{
  id:"4",
  name:"Pen",
  value: 50
   
},
{
  id:"5",
  name:"Sharpner",
  value: 40
    
}];
function app(){
   const NumberOfData = data.length;
   const max = Math.max.apply(Math, data.map(Data=> { 
    return Data.value;  
   }));
   const Count =[];
   for(let i= NumberOfData; i>=0;i--){
    Count.push(i);
   }
  //  console.log(Count);

  return <Canvas className="div" counter={Count}  dataforcan={data} max={max} numberofdata={NumberOfData} width="300px" height="200px" />;
}

export default app;