import React, { useRef, useEffect } from 'react';
import { fireEvent } from '@testing-library/react';


const Canvas = props => {
  
  const canvasRef = useRef(null)
  //for draw grid
  
  const drawgrid = ctx=>{
    for (let x=20;x<=300;x+=40) {
      for (let y=0;y<=188;y+=50) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, 188);
             ctx.strokeStyle="#D3D3D3";
          ctx.stroke();
          ctx.moveTo(20, y);
          ctx.lineTo(300, y);
          ctx.stroke();
      }
  }
  }
  //for draw x axis
  const drawx = ctx => {
        ctx.beginPath();
        ctx.moveTo(20, 188);
        ctx.lineTo(300,188);
        ctx.strokeStyle="#000"
        ctx.stroke();


        ctx.beginPath();
       ctx.textBaseline = "bottom";
      props.dataforcan.map(dataItem=>{
        return ctx.fillText(dataItem.name, ((200/props.numberofdata)*dataItem.id),200)
      });
      
      ctx.stroke();
      
  }
  //for Y Axis

  const drawy = ctx =>{

    ctx.beginPath();
    ctx.moveTo(20, 0);
    ctx.lineTo(20,188);
     ctx.strokeStyle="#000"
    ctx.stroke();



    ctx.beginPath();
     ctx.textBaseline = "bottom";
    props.dataforcan.map(dataItem=>{
      const space= ((200/4)*dataItem.id)-41;

      
      const countNumber = (props.max/4)*props.counter[dataItem.id];
      
      return ctx.fillText(countNumber, 3,space)
    });
    ctx.fillText(0, 7, 197);
    ctx.strokeStyle="#000"
    ctx.stroke();

  }


  //for Line Drawing
  const draw = ctx => {
               
               
               ctx.beginPath();
                // ctx.moveTo(0,200);
              props.dataforcan.map(dataItem=>{

                const Bottom = (dataItem.value/props.max)* 200;
                const Left = ((200/props.numberofdata)* dataItem.id)+20;
                const Length = 200-Bottom;
                return ctx.lineTo(Left, Length);;
              });
                 ctx.strokeStyle="blue";
               ctx.stroke();
  }

 
  useEffect(() => {
    const context = canvasRef.current.getContext('2d')
                              
    //Our draw come here
    drawgrid(context)
    drawx(context)
    drawy(context)
    draw(context)
    
    
    
  }, [drawgrid, drawx, drawy, draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas;