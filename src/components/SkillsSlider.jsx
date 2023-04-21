import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "react-bootstrap/esm/Container";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import SkillCard from "./SkillCard";

export default function Compo() {
  const skills = [
    {
      title: "Card 1",
      description: "This is the first card.",
    },
    {
      title: "Card 2",
      description: "This is the second card.",
    },
    {
      title: "Card 3",
      description: "This is the third card.",
    },
    {
      title: "Card 4",
      description: "This is the third card.",
    },
    {
      title: "Card 5",
      description: "This is the third card.",
    },
    {
      title: "Card 6",
      description: "This is the third card.",
    },
    {
      title: "Card 7",
      description: "This is the third card.",
    },
    {
      title: "Card 8",
      description: "This is the third card.",
    },
  ];

  return (
    <>
      <Container>
        <Swiper
          style={{
            width: "100%",
            marginTop: "0px",
            padding: "0px 0px 0px 0px",
          }}
          slidesPerView="auto"
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {skills.map((card, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  width: "160px",
                  height: "250px",
                  borderRadius: "12px",
                }}
              >
                <SkillCard title={card.title} description={card.description} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
}
