import React from 'react';
import Masonry from './Masonry';

const MasonryTest: React.FC = () => {
  const testItems = [
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
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Masonry Component Test
      </h1>
      <div className="min-h-[600px]">
        <Masonry
          items={testItems}
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

export default MasonryTest;
