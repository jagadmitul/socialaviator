import React, { useCallback, useEffect } from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 80,
  },
};

interface Props {
  children: React.ReactNode;
}

const VideoCarousel = ({ children }: Props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const carouselRef = React.useRef(null);

  // the infinite and rewind properties of the carousel always cause some kind of problem with this callback :/
  const afterChangeCallback = useCallback(
    (previousSlide: number, { currentSlide }: { currentSlide: number }) => {
      if (currentSlide === currentSlideIndex) return;
      setCurrentSlideIndex(currentSlide);

      const containerRef = (carouselRef.current as any).containerRef.current;
      let videoElement: HTMLVideoElement | null;
      if (!containerRef) return;
      const slides = containerRef.querySelectorAll(
        ".react-multi-carousel-item"
      );
      slides[previousSlide]?.classList.remove("opacity-100");
      slides[previousSlide]?.classList.add("opacity-40");
      slides[previousSlide]?.getElementsByTagName("video")[0]?.pause();
      videoElement = slides[previousSlide]?.getElementsByTagName("video")[0];
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }

      slides[currentSlide]?.classList.remove("opacity-40");
      slides[currentSlide]?.classList.add("opacity-100");
      videoElement = slides[currentSlide]?.getElementsByTagName("video")[0];
      if (videoElement) {
        videoElement.play();
      }
    },
    [currentSlideIndex]
  );

  useEffect(() => {
    if (!carouselRef.current) return;
    const containerRef: any = (carouselRef?.current as any).containerRef.current;
    if (!containerRef) return;
    const activeSlide = containerRef.querySelector(
      ".react-multi-carousel-item--active"
    );
    activeSlide?.classList.remove("opacity-40");
    activeSlide?.classList.add("opacity-100");
    const videoElement = activeSlide?.getElementsByTagName("video")[0];
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play();
    }
  }, [carouselRef.current]);

  return (
    <Carousel
      ref={carouselRef}
      containerClass="flex gap-2 w-full 2xl:pt-[60px] lg:pt-[200px] pt-10 z-10 md:mx-12 mx-4"
      itemClass="flex justify-center opacity-40"
      rewind={true}
      afterChange={afterChangeCallback}
      responsive={responsive}
      centerMode={false}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      transitionDuration={100}
      arrows={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {children}
    </Carousel>
  );
};

export default VideoCarousel;
