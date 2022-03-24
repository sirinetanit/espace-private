import React from "react";

function AccordionLayout(props){
    return (
<div>

               
<div id="accordion-arrow-icon" data-accordion="open">
<h2 id="accordion-arrow-icon-heading-1">
<button type="button" class="flex justify-between pb-10 w-full font-medium text-left text-gray-900 bg-transparent hover:bg-transparent" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
<span>{props.title}</span>
<svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
</h2>
<div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">

              <main className="main">
                  {props.children}
              </main>             
</div>
</div>     

</div>
    );}

export default AccordionLayout;