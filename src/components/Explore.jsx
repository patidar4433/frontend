import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Cards from "./Cards";
import card1 from "..//img/card1.png";
import card2 from "..//img/card2.png";
import card3 from "..//img/card3.jfif";
import card4 from "..//img/card4.png";
import card5 from "..//img/card5.jfif";
import card6 from "..//img/card6.png";
import card21 from "..//img/card21.png";
import cardimg from "..//img/cardimg.jpg";
import Container from "react-bootstrap/esm/Container";

const Explore = () => {
  return (
    <>
      <div style={{ background: "rgba(158, 158, 158, 0.1)" }}>
        <Container style={{ background: "#fff" }}>
          <div className="explore_div">
            <span style={{ color: "#c1bcbc" }}>Welcome to</span>
            <h1>coDeunit Explore</h1>
          </div>
          <div className="card_div">
            <h3>Featured</h3>
            <Swiper
              style={{ justifyContent: "space-between" }}
              slidesPerView={3}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="explore-slider"
            >
              <SwiperSlide style={{ marginRight: "0px" }}>
                <div className="card_slider">
                  <Cards
                    image={card1}
                    text1={"The codeUNIT"}
                    text2={"Beginner's Guide"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ marginRight: "0px" }}>
                <div className="card_slider">
                  <Cards
                    image={card2}
                    text1={"Data Structure"}
                    text2={"And Algorithum"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ marginRight: "0px" }}>
                <div className="card_slider">
                  <Cards
                    image={card3}
                    text1={"Top Interview"}
                    text2={"Questions"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ marginRight: "0px" }}>
                <div className="card_slider">
                  <Cards
                    image={card4}
                    text1={"Dynamic"}
                    text2={"Programming"}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
        <Container style={{ background: "#fff" }}>
          <div className="card_div">
            <h3 style={{ textAlign: "left" }}>Interview</h3>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide style={{ marginRight: "0px" }}>
                <div className="card_slider">
                  <Cards
                    image={card21}
                    text1={"The codeUNIT"}
                    text2={"Beginner's Guide"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ marginRight: "0px" }}>
                <div className="card_slider">
                  <Cards
                    image={card2}
                    text1={"Data Structure"}
                    text2={"And Algorithum"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ marginRight: "0px" }}>
                <div className="card_slider">
                  <Cards
                    image={card6}
                    text1={"Top Interview"}
                    text2={"Questions"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ marginRight: "0px" }}>
                <div className="card_slider">
                  <Cards
                    image={card5}
                    text1={"Dynamic"}
                    text2={"Programming"}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ marginRight: "0px" }}>
                <div className="card_slider">
                  <Cards
                    image={cardimg}
                    text1={"Dynamic"}
                    text2={"Programming"}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Explore;
