import React from "react";

export default function Table(props){
    return(
    <div>
 
     
          <tbody>
            
            <tr class="bg-white border-b ">
              <td class="px-6 py-2  text-xs font-medium text-gray-900 border-r  flex-col ">
                <h3 className=" font-medium text-xl">{props.td101}</h3>
                <p>{props.td102}</p>
                <p>{props.td103}</p>
              </td>
              <td  class=" text-sm text-gray-900 font-light px-2 py-2  text-center border-r">
              <div className="inline-flex">
                <div className="flex-col px-4 w-52">
                  <p className=" font-medium text-xl">{props.td20101}</p>
                  <p className="text-gray-500 text-xs">{props.td20102}</p>
                </div>
                <ul className="flex-col divide-y divide-gray-200 px-2 w-1/2">
                  <li className=" text-sm font-medium">{props.td20201}</li>
                  <li className=" text-sm font-medium">{props.td20203}</li>
                </ul>
                <div className="flex-col px-4 w-52">
                  <p className=" font-medium text-xl">{props.td20301}</p>
                  <p className="text-gray-500 text-xs">{props.td20302}</p>
                </div>
                </div>
              </td>
              <td class="px-6 py-2 text-xs font-medium text-gray-900 border-r flex-col ">
                <h3>{props.td301}</h3>
                <p className=" font-semibold text-sm">{props.td302}</p>
              </td>
              <td class="px-6 py-2 text-xs font-medium  text-gray-900 border-r  ">
                <h3>{props.td401}</h3>
                <p className=" font-semibold text-sm">{props.td402}</p>
              </td>
            </tr>


           

            </tbody>


    </div>
    );
}

/*
<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full border text-center">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                First
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                Last
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Mark
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Otto
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">2</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Jacob
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                Thornton
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">3</td>
              <td colspan="2" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r">
                Larry the Bird
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @twitter
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
*/