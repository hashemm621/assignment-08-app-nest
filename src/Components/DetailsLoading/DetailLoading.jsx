import React from 'react';

const DetailLoading = () => {
    return (
        <div className='max-w-7xl py-20 mx-auto px-5'>
            <div className="flex gap-4">
  <div className="skeleton h-[300px] w-[300px]"></div>
  <div className='w-full'>
    <div className="skeleton h-4 w-52"></div>
  <div className='flex justify-around items-center gap-5'>
    <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
  </div>
    <div className="skeleton h-4 w-52"></div>
  <div className='flex justify-around items-center gap-5'>
    <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
  </div>
    <div className="skeleton h-4 w-52"></div>
  <div className='flex justify-around items-center gap-5'>
    <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
  </div>
    <div className="skeleton h-4 w-52"></div>
  <div className='flex justify-around items-center gap-5'>
    <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
  </div>
  </div>
</div>
        </div>
    );
};

export default DetailLoading;