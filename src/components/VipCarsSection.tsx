import React from 'react';
import Masonry from './Masonry';

const VipCarsSection: React.FC = () => {
  // VIP cars data with different heights for masonry effect
  const vipCars = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/400?grayscale",
      url: "/stock",
      height: 400,
    },
    {
      id: "2", 
      img: "https://picsum.photos/id/1011/600/350?grayscale",
      url: "/stock",
      height: 350,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/450?grayscale",
      url: "/stock",
      height: 450,
    },
    {
      id: "4",
      img: "https://picsum.photos/id/1025/600/300?grayscale",
      url: "/stock",
      height: 300,
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1031/600/380?grayscale",
      url: "/stock",
      height: 380,
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1035/600/420?grayscale",
      url: "/stock",
      height: 420,
    },
    {
      id: "7",
      img: "https://picsum.photos/id/1040/600/360?grayscale",
      url: "/stock",
      height: 360,
    },
    {
      id: "8",
      img: "https://picsum.photos/id/1045/600/320?grayscale",
      url: "/stock",
      height: 320,
    },
    {
      id: "9",
      img: "https://picsum.photos/id/1050/600/400?grayscale",
      url: "/stock",
      height: 400,
    },
    {
      id: "10",
      img: "https://picsum.photos/id/1055/600/350?grayscale",
      url: "/stock",
      height: 350,
    },
  ];

  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          VIP Cars Collection
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Discover our exclusive collection of premium vehicles, carefully selected for discerning clients.
        </p>
        <button 
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg transition-colors duration-200"
          onClick={() => window.location.href = '/stock'}
        >
          See All VIP Cars
        </button>
      </div>
      
      {/* Masonry Layout */}
      <div className="min-h-[600px]">
        <Masonry
          items={vipCars}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </div>
  );
};

export default VipCarsSection;
