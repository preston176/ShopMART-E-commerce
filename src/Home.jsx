import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Product from './Product'
import './home.css'
import { products } from './producsData';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Home = ({ searchQuery }) => {


      const filteredProducts = products.filter(
        (product) =>
          product.title &&
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
  return (
    <div className="home">
      <div className="home__container">
      <Swiper className='swiper__container'
        spaceBetween={30}
        draggable={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className='home__image'>
        <img src="/images/banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className='home__image'><img src="/images/banner1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className='home__image'><img src="/images/banner2.jpg" alt="" /></SwiperSlide>
      </Swiper>
       
        
        <div className="home__search">
        </div>
        <div className="home__row">
          {filteredProducts.map((product) => (
         
            <Product
              key={crypto.randomUUID()}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
             
          ))}
          </div>
      </div>
    </div>
  );
};

export default Home;
