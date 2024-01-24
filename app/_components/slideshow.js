"use client";
import React from "react";
import Slider from "react-slick";
import slide1Img from "./assets/slideshow_pics/slide_1.jpg";
import slide2Img from "./assets/slideshow_pics/slide_2.jpg";
import slide3Img from "./assets/slideshow_pics/slide_3.jpg";
import slide4Img from "./assets/slideshow_pics/slide_4.jpg";
import slide5Img from "./assets/slideshow_pics/slide_5.jpg";
import Image from "next/image";

export default function Slideshow() {
  const slideImages = [
    [1, slide1Img],
    [2, slide2Img],
    [3, slide3Img],
    [4, slide4Img],
    [5, slide5Img],
  ];

  const settings = {
    appendDots(dots) {
      return (
        <ul>
          {dots.map(dot => {
            if (!(dot.props["className"] === "slick-active")) return dot;

            return React.cloneElement(dot, {
              children: (
                <a>
                  <div className="size-3 bg-primary-500 rounded-full"></div>
                </a>
              )
            });
          })}
        </ul>);
    },
    customPaging(i) {
      return (
        <a>
          <div className="size-3 bg-gray-300 rounded-full"></div>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  };

  return (
    <div className="min-w-0 mb-12">
      <Slider {...settings}>
        {slideImages.map(img => (
          <div className="h-full w-full" key={img[0]}>
            <Image src={img[1]} className="w-full object-contain" alt="images"/>
          </div>
        ))}
      </Slider>
    </div>
  );
}