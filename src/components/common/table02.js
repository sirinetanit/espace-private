import React from "react";

export default function TableLine(props){
    return(
    <div>
 
 <tbody className=" w-full">
 <tr class="border-b bg-white border-r ">
     <th class=" pl-6 pr-96 py-4 font-medium text-gray-900 text-left">
         {props.th101}
     </th>
   
     <th class="px-6 py-4 text-right ml-60">
       {props.th102}
     </th>
 </tr>

 <tr class="border-b bg-white border-r ">
     <th class="pl-6 pr-96 py-4 font-medium text-gray-900 text-left ">
         {props.th201}
     </th>
   
     <th class="px-6 py-4 text-right">
       {props.th202}
     </th>
 </tr>


 <tr class="border-b bg-gray-50 border-r">
     <th  class="pl-6 pr-96 py-4 font-medium text-gray-900 text-left ">
         {props.th301}
     </th>

     <th class="px-6 py-4 text-right">
         {props.th302}
     </th>
 </tr>
 </tbody>


 
 </div>
    );
}