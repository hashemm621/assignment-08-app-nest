import { ArrowDownToLine, Star } from 'lucide-react';
import React from 'react';

const App = ({app}) => {
    console.log(app);
    const {ratingAvg,title,downloads,image}=app
    console.log(ratingAvg , title,downloads,image);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition">
  <figure className='p-5  mx-auto'>
    <img className='w-full h-[300px] rounded-2xl'
      src={image}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      
    </h2>
   
    <div className="card-actions justify-between">
      <div className="badge badge-outline border-0 font-semibold px-6 py-4 bg-[#F1F5E8] text-[#00D390]"><ArrowDownToLine />{downloads}M</div>
      <div className="badge badge-outline border-0 font-semibold px-6 py-4 bg-[#FFF0E1] text-[#FF8811]"><Star />{ratingAvg}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default App;