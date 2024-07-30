import React, { useEffect, useState } from "react";

const images = [
  "https://twl.techcabal.com/wp-content/uploads/2019/02/Lagos-Initiative.png",
  "https://static-00.iconduck.com/assets.00/access-bank-plc-icon-512x128-r5rvcuv8.png",
  "https://static-00.iconduck.com/assets.00/wema-bank-icon-2048x1148-78xxm99q.png",
  "https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/GetFundedAfrica.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUl-9r9mMim20lBDA0_Qh3eZz0h0UmVNzuwA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYvZANqq_87nliOnsi4b7ktTG1dkSJhrTfg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT547jSiYMFa8Xp89Iiyq_P1lwyqhRCKy-DQA&s",
  "https://cdn.logojoy.com/wp-content/uploads/20230629132639/current-logo-600x338.png"
];

const Sponsor = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1 ) % images.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);

  const displayedImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
    images[(currentIndex + 3) % images.length]
  ];
  
  return (
    <div className="overflow-hidden relative w-full h-64">
      <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="flex-none w-1/4">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};
// const Sponsor = () => {
//   return (
//     <section>
//       <main className="py-14">
//         <header className="text-center font-bold text-3xl pt-6 pb-10">
//           <h1>Meet Some Of Our Partners</h1>
//         </header>

//         {/* <div className="flex">
//           <img
//             src=""
//             alt=""
//             width={300}
//           />
//           <img
//             src=""
//             alt=""
//             width={250}
//           />
//           <img
//             src=""
//             alt=""
//             width={250}
//           />
//           <img
//             src=""
//             alt=""
//             width={150}
//             height={50}
//           />
//           <img
//             src=""
//             alt=""
//             width={120}
//           />
//           <img
//             src=""
//             alt=""
//             width={120}
//           />
//           <img
//             src=""
//             alt=""
//             width={200}
//             height={60}
//           />
//           <img
//             src=""
//             alt=""
//             width={150}
//           />
//         </div> */}
//       </main>
//     </section>
//   );
// };

export default Sponsor;
