import React from 'react'
import { categories } from '../products'
import ProductGrid from '../assets/components/ProductGrid'
import Footer from '../assets/components/Footer'
import { useDispatch } from 'react-redux'
import { setSelectedCategory } from '../features/products/ProductsSlice'
import { slider } from '../products'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Home = () => {
  const dispatch = useDispatch();
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  return (
    <div>
      <Slider {...settings}>
        {slider.map((img, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-cover bg-center py-5 px-4 relative"
          >
            <div className="flex justify-center items-center w-full h-full ">
              <img
                src={img.image}
                alt="slider image"
                className="w-[640px] h-[340px] rounded-lg flex justify-center items-center object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="container mx-auto my-10 px-4 md:px-20">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => dispatch(setSelectedCategory(cat))}
              className=" overflow-x-hidden
               bg-gray-300 py-2 px-4 rounded-md  text-black active:scale-110 hover:bg-zinc-600 
              transition-all duration-300 ease-in"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default Home
