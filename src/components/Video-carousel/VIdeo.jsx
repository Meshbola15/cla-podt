import React from "react";
import Carousel from "react-elastic-carousel";
import "./Video.css";
import Button from "../../Fragments/Button/Button";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 966, itemsToShow: 3, itemsToScroll: 1 },
  { width: 2000, itemsToShow: 4, itemsToScroll: 1 },
];

const VIdeo = () => {
  return (
    <div className="Video-container">
      <h2>In The Media</h2>
      <div className="video-carousel">
        <Carousel
          breakPoints={breakPoints}
          // showArrows={false}
          // pagination={false}
          // enableAutoPlay={true}
          enableMouseSwipe={true}
          enableSwipe={true}
          outerSpacing={[0]}
          itemsToScroll={1}
          // isRTL={true}
          // showEmptySlots={true}
        >
          <iframe
            src="https://player.vimeo.com/video/761782490?h=e1fb13c81f"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782520?h=f3bbf7560f"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782548?h=14f0c13fb6"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782572?h=fb8927ed51"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782548?h=14f0c13fb6"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782612?h=3230af4317"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782637?h=63af2c85fa"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782668?h=9a271fdf54"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782697?h=5e8326d147"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782716?h=ddf1bd4a58"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782736?h=4a24c87cec"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782774?h=d613f2945c"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782819?h=db714cb0d2"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782850?h=9439252d4a"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782887?h=4c1b51f32e"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782927?h=4e65159f19"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761782967?h=09be865d63"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761783000?h=b63ff5e77b"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761783034?h=777a5101e3"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761783070?h=d00892ee9a"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://player.vimeo.com/video/761783093?h=56ad238f7c"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe>
          {/* <iframe
            src="https://player.vimeo.com/video/761782460?h=62663aabb6"
            width="640"
            height="564"
            frameborder="0"
            allow="fullscreen"
            allowfullscreen
          ></iframe> */}
        </Carousel>
      </div>
      <div className="video-btn">
        <Button
          buttonStyle="solid"
          buttonText="Create your account now"
          link="#"
        />
      </div>
    </div>
  );
};

export default VIdeo;
