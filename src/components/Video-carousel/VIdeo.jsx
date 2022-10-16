import React from "react";
import video from "../../Assets/video-4.png";
import Carousel from "react-elastic-carousel";
import "./Video.css";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 966, itemsToShow: 2, itemsToScroll: 1 },
  { width: 2000, itemsToShow: 3, itemsToScroll: 1 },
];

const VIdeo = () => {
  return (
    <div className="Video-container">
      <h2>Video Gallery</h2>
      <div className="">
        <Carousel
          breakPoints={breakPoints}
          // showArrows={false}
          // pagination={false}
          // enableAutoPlay={true}
          enableMouseSwipe={true}
          enableSwipe={true}
          itemsToScroll={1}
          // isRTL={true}
          // showEmptySlots={true}
        >
          <img src={video} />
          <img src={video} />
          <img src={video} />
          <img src={video} />
          <img src={video} />
          <img src={video} />
        </Carousel>
      </div>
    </div>
  );
};

export default VIdeo;
