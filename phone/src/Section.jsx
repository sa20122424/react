import React, { useEffect, useState } from 'react';

function Section() {
  const [Phone, setPhone] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/phone")
      .then((response) => response.json())
      .then((data) => {
        setPhone(data); 
      })
    
  }, []);
  

  return (
    <>
    
     <div className="container mx-auto p-4">
     <h1 className='text-[50px] text-center p-[20px]'>PRODUCT</h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {Phone.map((v, index) => (
      
      <div key={v.id} className="bg-white shadow-md rounded-lg p-[25px] border hover:shadow-2xl transition duration-300  ">
      <img
        className="w-full h-[200px] object-cover rounded-t-lg mb-4"
        src={v.img}
        alt={v.title}
      />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">{v.title}</h2>
          <p className="text-lg font-medium text-gray-700  ">${v.money}</p>
        </div>
        <button className="bg-blue-500 text-white h-[50px] rounded hover:bg-blue-600 transition duration-300 w-[100px] " >
          Buy
        </button>
      </div>
    </div>
        
       ))}
     </div>
   </div>
    </>
   
  );
}

export default Section;