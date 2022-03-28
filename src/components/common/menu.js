import React from "react";

export default function DropDownMenue(props){
    return(
       <div>
           <button  data-dropdown-toggle="dropdown" className=" text-black bg-transparent  inline-flex  border-hidden  absolute  hover:bg-transparent hover:shadow-none hover:text-black top-11 h-4 text-sm text-center leading-4 right-14 mt-0 " type="button">{props.title} <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<div id="dropdown" className="hidden text-base list-none bg-white w-75 border-gray-400 border-2 z-50">
    <ul class="py-1">
      <li>
        <a href={props.link1} className="block py-2 px-3  text-lg text-gray-400 hover:bg-gray-100 text-left ">{props.firstItem}</a>
      </li>
      <li>
        <a href={props.link2} className="block py-2 px-3 text-gray-400 text-lg hover:bg-gray-100 text-left ">{props.secondItem}</a>
      </li>
     
    </ul>
    <script src="../path/to/flowbite/dist/flowbite.js"></script>

</div>
        

       </div>
    );
}
