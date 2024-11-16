// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
//       <div>
//         <img 
//           src="hero.jpg" 
//           alt="hero pic" 
//           style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
//         />
//       </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react';

const Hero = () => {
  return (
    <section className="hero-container relative w-full h-screen mt-5 overflow-hidden">
      {/* Background Image */}
      <img 
        src="hero.jpg" 
        alt="hero pic" 
        className="w-full h-full object-cover"
      />
      
      {/* Overlay Text */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
      >
        <h1 className="text-4xl font-bold drop-shadow-lg">Scent your style</h1>
        <p className="text-lg mt-2 drop-shadow-lg">Explore a range of scents that match your style and personality.</p>
      </div>
    </section>
  );
};

export default Hero;
