import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "react-bootstrap/esm/Container";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import SkillCard from "./SkillCard";

export default function Compo() {
  const skills = [
    { title: "C", description: "C - language" },
    { title: "C++", description: "C++ - language" },
    { title: "JavaScript", description: "JS - language" },
  ];

  return (
    <>
      <Container>
        <Swiper
          style={{ width: "100%" }}
          slidesPerView={5}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide style={{ marginRight: "0px", width: "150px" }}>
            <SkillCard /> 
          </SwiperSlide> 
          <SwiperSlide style={{ marginRight: "0px", width: "150px" }}>
            <SkillCard />
          </SwiperSlide>
          <SwiperSlide style={{ marginRight: "0px", width: "150px" }}>
            <SkillCard />
          </SwiperSlide>
          <SwiperSlide style={{ marginRight: "0px", width: "150px" }}>
            <SkillCard />
          </SwiperSlide>
          <SwiperSlide style={{ marginRight: "0px", width: "150px" }}>
            <SkillCard />
          </SwiperSlide>
          <SwiperSlide style={{ marginRight: "0px", width: "150px" }}>
            <SkillCard />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}
