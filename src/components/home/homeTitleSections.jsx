import React from 'react';

function HomeTitleSections({title}){
        return (
           <section>
                <h3 className='text-teal-500 text-base font-medium'>{title}</h3>
                <div className='bg-teal-500 w-[65px] h-[2px] my-[7px]'></div>
           </section>
        );
}

export default HomeTitleSections;