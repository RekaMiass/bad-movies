import Slider from "react-slick";

interface CaruselProps {
  screens: string[];
}

export default function Carousel ({ screens }: CaruselProps) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {screens.map((screen: string) => (
        <img className="object-cover h-60 mt-5 px-3" src={screen} alt="" />
      ))}
    </Slider>
  );
};
