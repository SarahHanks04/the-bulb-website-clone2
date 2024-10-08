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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); 
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

      <header className="text-center font-bold text-3xl pt-6 pb-10">
         <h1>Meet Some Of Our Partners</h1>
      </header>

      <main className={`flex ${isTransitioning ? 'transition-transform duration-1000' : ''}`} style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
        {images.concat(images.slice(0, 4)).map((image, index) => (
          <div key={index} className="flex-none w-1/4 h-full flex justify-center items-center">
            <img src={image} alt={`Slide ${index}`} width={200} height={80} className="py-10" />
          </div>
        ))}
      </main>

    </div>
  );
};


export default Sponsor;
