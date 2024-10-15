/* eslint-disable */

import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../../../public/booksList.json";
import Card from "../cards/Card";

function FreeBook() {
  const filteredData = list.filter((data) => data.category === "free");
  console.log("filtered Data  ", filteredData);


  // This setting for the responsive slider is taken from https://react-slick.neostack.com/docs/example/responsive 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="mx-auto max-w-screen-2xl container md:px-20 px-4">

        <div>
          <h1 className="text-xl pb-2 font-semibold">Free Offered Books</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
            aliquid officiis. Eligendi aspernatur non blanditiis maiores, iusto
            iure distinctio aliquid! Ducimus aliquam ex dicta, ipsam praesentium
            debitis? Unde, autem eos?
          </p>
        </div>
          <div className="slider-container">
            <Slider {...settings}>
              {filteredData.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>

    </>
  );
}

export default FreeBook;
