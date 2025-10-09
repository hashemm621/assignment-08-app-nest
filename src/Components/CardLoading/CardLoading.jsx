import React from 'react';

const CardLoading = ({count = 8}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
           {(Array.from({length:count})).map((_,i) => (
             <div key={i} className="flex flex-col gap-4">
  <div className="skeleton h-[300px] w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className='flex justify-between items-center'>
    <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
  </div>
</div>
           ))}
        </div>
    );
};

export default CardLoading;