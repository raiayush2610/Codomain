import { App } from "./constanst";
 
export const getApp =()=>{

   const subdomain =getSubdomain(window.location.hostname);

   const main =App.find((app)=>app.main);
      if (!main) throw new Error ("Must have main app");

      if(subdomain==="") return main.app;
      // console.log(main);

      // console.log(subdomain);
      
      const app =App.find((app)=>subdomain === app.subdomain);
      console.log(app);
      
      if (!app) return main.app;
      
         return app.app;

      

   //  console.log(subdomain);
    
 };
const getSubdomain =(location:string)=>{
   const locationParts = location.split(".")
   let slicefill =-2;

   // const  islocalHost = locationParts.slice[1][0] === "localhost";
   const islocalHost = locationParts.slice(-1)[0] ==="localhost";
   if (islocalHost)slicefill=-1;

       return locationParts.slice(0,slicefill).join("");
   



   // return locationParts[0]

}
