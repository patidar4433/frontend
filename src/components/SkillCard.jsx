import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
const SkillCard = (props) => {
  console.log("props", props);
  return (
   
    <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
        style={{
          width: "75%",
          marginTop: "90px",
          
          padding: "0px 0px 0px 0px",
        }}
      >
        <SwiperSlide
          className="swiperbox"
          style={{
         
            width: "160px",
            height: "250px",
            borderRadius: "12px",
          }}
        >
          <div className="swiperimg"
            style={{
              backgroundColor: "black",
              width: "160px",
              height: "160px",
              color: "white",
              borderRadius: "12px",
            }}
          >
            slide1
          </div>
          <div
            style={{
              width: "160px",
              textAlign: "center",
              paddingTop: "10px",
              color: "black",
            }}
          >
            ahdfahsfsdfdfdfdsg
            <br />
            fdfsddsfsd
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiperbox"
          style={{
          
            width: "160px",
            height: "250px",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              width: "160px",
              height: "160px",
              color: "white",
              borderRadius: "12px",
            }}
          >
            slide2
          </div>
          <div
            style={{
              width: "160px",
              textAlign: "center",
              paddingTop: "10px",
              color: "black",
            }}
          >
            ahdfahsfsdfdfdfdsg
            <br />
            fdfsddsfsd
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiperbox"
          style={{
           
            width: "160px",
            height: "250px",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              width: "160px",
              height: "160px",
              color: "white",
              borderRadius: "12px",
            }}
          >
            slide3
          </div>
          <div
            style={{
              width: "160px",
              textAlign: "center",
              paddingTop: "10px",
              color: "black",
            }}
          >
            ahdfahsfsdfdfdfdsg
            <br />
            fdfsddsfsd
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiperbox"
          style={{
            
            width: "160px",
            height: "250px",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              width: "160px",
              height: "160px",
              color: "white",
              borderRadius: "12px",
            }}
          >
            slide4
          </div>
          <div
            style={{
              width: "160px",
              textAlign: "center",
              paddingTop: "10px",
              color: "black",
            }}
          >
            ahdfahsfsdfdfdfdsg
            <br />
            fdfsddsfsd
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiperbox"
          style={{
           
            width: "160px",
            height: "250px",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              width: "160px",
              height: "160px",
              color: "white",
              borderRadius: "12px",
            }}
          >
            slide5
          </div>
          <div
            style={{
              width: "160px",
              textAlign: "center",
              paddingTop: "10px",
              color: "black",
            }}
          >
            ahdfahsfsdfdfdfdsg
            <br />
            fdfsddsfsd
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiperbox"
          style={{
           
            width: "160px",
            height: "250px",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              width: "160px",
              height: "160px",
              color: "white",
              borderRadius: "12px",
            }}
          >
            slide6
          </div>
          <div
            style={{
              width: "160px",
              textAlign: "center",
              paddingTop: "10px",
              color: "black",
            }}
          >
            ahdfahsfsdfdfdfdsg
            <br />
            fdfsddsfsd
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiperbox"
          style={{
            
            width: "160px",
            height: "250px",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              width: "160px",
              height: "160px",
              color: "white",
              borderRadius: "12px",
            }}
          >
            slide7
          </div>
          <div
            style={{
              width: "160px",
              textAlign: "center",
              paddingTop: "10px",
              color: "black",
            }}
          >
            ahdfahsfsdfdfdfdsg
            <br />
            fdfsddsfsd
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiperbox"
          style={{
          
            width: "160px",
            height: "250px",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              width: "160px",
              height: "160px",
              color: "white",
              borderRadius: "12px",
            }}
          >
            slide8
          </div>
          <div
            style={{
              width: "160px",
              textAlign: "center",
              paddingTop: "10px",
              color: "black",
            }}
          >
            ahdfahsfsdfdfdfdsg
            <br />
            fdfsddsfsd
          </div>
        </SwiperSlide>
      </Swiper>
  );
};
export default SkillCard;
