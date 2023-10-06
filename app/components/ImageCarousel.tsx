"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type ImageType = {
  url: string;
};

type ImageCarouselProps = {
  images: ImageType[];
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }
  return (
    <Carousel
      autoPlay={true}
      swipeable={true}
      showArrows={true}
      useKeyboardArrows={true}
    >
      {images.map((image, index) => (
        <div key={index} className="object-cover">
          <img
            src={image.url}
            alt={`Image ${index}`}
            className="w-full h-full"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
