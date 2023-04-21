import React from "react";

const SkillCard = (props) => {
  const {title, description} = props;
  return (
    <div>
      <div
        className="swiperimg"
        style={{
          backgroundColor: "black",
          width: "160px",
          height: "160px",
          color: "white",
          borderRadius: "12px",
          opacity:"0.5"
        }}
      >
        {title}
      </div>
      <div
        style={{
          width: "160px",
          textAlign: "center",
          paddingTop: "10px",
          color: "black",
        }}
      >
        {title}
        <br />
        {description}
      </div>
    </div>
  );
};
export default SkillCard;

// import React from 'react';

// import { Card } from "antd";
// const { Meta } = Card;
// const SkillCard = (props) => {
//   const { title, description } = props;
//   return (
//     <Card
//       style={{
//         width: "100%",
//         height: "100%",
//       }}
//       cover={
//         <img
//           style={{ width: "100%", height: "100px" }}
//           alt="example"
//           src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//         />
//       }>
//       <Meta
//         title={title}
//         description={description}
//       />
//     </Card>
//   );
// };
// export default SkillCard;
