import React from "react";
import Title from "../common/title";
import { useState } from "react";

function AccordionLayout(props){
  const [showDetails, setShowDetails] = useState(false);

    return (
<div>
<div data-inactive-classes="text-gray-500">
 
  <h2>
    <button type="button" class="flex justify-between w-full font-medium text-left text-gray-500 p-0"
           onClick={() => setShowDetails((showDetails) => !showDetails)}>

      <span>{props.title}</span>
<div className="flex w-11/12">
{showDetails && <img src={props.img} className=" h-12 px-8 " />}
  <div>
  <Title className=" text-sm" title={props.title1}/>
  <Title className="leftT relative -top-11" subtitle={props.title2}/>
{showDetails && <Title className=" text-sm font-medium relative -top-14" title={props.title3}/>}
  <div className="relative -top-16">
{showDetails && <p className="text-black text-xs">{props.link1}</p>}
{showDetails && <p className="text-black  text-xs">{props.link2}</p>}
{showDetails &&<ul className="text-xs text-black">
      <li>{props.list1}</li>
  </ul>}
  </div>

  </div>
  </div>

  <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0 relative" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </h2>

  {!showDetails &&
    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
    <main className="main">
         {props.children}
    </main>     
    </div>
  }

</div>     

</div>
    );}

export default AccordionLayout;

/******************************************************************************************** */
/*
<div className="accordion">
<div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-gray-400 dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
 
  <h2 id="accordion-flush-heading-1">
    <button type="button" class="flex justify-between w-full font-medium text-left text-gray-500 p-0
    " data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1"
      onClick={() => setShowDetails((showDetails) => !showDetails)}>

      <span>{props.mainTitle}</span>


<div className="flex relative -left-30">
      <img src={props.img} className=" h-12 px-8 " />
  <div className="">
  <Title className=" text-sm" title={props.title1}/>
  <Title className="leftT relative -top-11" subtitle={props.title2}/>
  <Title className=" text-sm font-medium relative -top-14" title={props.title3}/>
  <div className="relative -top-16">
  <p className="text-black text-xs">{props.link1}</p>
  <p className="text-black  text-xs">{props.link2}</p>
  <ul className="text-xs text-black">
      <li>{props.list1}</li>
      <li>{props.list2}</li>
  </ul>
  </div>
  </div>

  </div>
  <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0 relative" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
   
    </button>
  </h2>

  {!showDetails &&
  <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
    <main className="main">
         {props.children}
    </main>     
    </div>
  </div>
  }

</div>     

</div>
*/
/******************************************************************************************** */


/*
<div id="accordion-arrow-icon" data-accordion="open">
<h2 id="accordion-arrow-icon-heading-1">
<button type="button" class="absolute flex font-medium text-gray-900 bg-transparent hover:bg-transparent" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
<span>{props.title}</span>

<img src={props.img} class=" h-16 px-8"/>
  <div className="">
  <Title className="leftT" title={props.title1} subtitle={props.title2}/>
  <Title className="leftT" title={props.title3}/>
  <Link link={props.link1}/>
  <Link link={props.link2}/>
  <ul >
      <li>{props.list1}</li>
      <li>{props.list2}</li>
  </ul>
  </div>


<svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</h2>
<div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">

              <main className="main">
                  {props.children}
              </main>             
</div>
*/