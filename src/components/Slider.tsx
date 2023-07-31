import Slider from "react-slick";
import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CaruselProps {
  screens: string[];
}

export default function Carousel({ screens }: CaruselProps) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image: any) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {screens.map((screen: string, id) => (
          <img
            className="object-cover h-45 sm:h-60 mt-5 px-3 cursor-zoom-in"
            src={screen}
            alt=""
            key={id}
            onClick={() => openModal(screen)}
          />
        ))}
      </Slider>
      {selectedImage && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeModal}
        >
          <img
            className="max-w-full max-h-full"
            src={selectedImage}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
