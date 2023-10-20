import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const [time, setTime] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) {
      router.push("/home");
    }
    // if (videoRef.current && play) {
    //   videoRef.current.volume = 0;
    //   videoRef.current.play();
    // }
  }, [play]);

  useEffect(() => {
    setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <main className="font-Mont">
      <div
        className={`${
          time >= 12 ? "cursor-pointer" : ""
        } w-[100vw] h-[100vh] flex relative bg-ground bg-center bg-cover text-white lg:pt-0 pt-[100px]`}
      >
        {/* <img
          src="/assets/images/Logo-big.png"
          className={`${
            time >= 4 ? "hidden" : "flex"
          } absolute top-[80px] lg:w-[850px] w-[380px] lg:left-[calc(50%-430px)] left-[calc(50%-188px)] animate-fadeinLogo opacity-0 z-10`}
        /> */}

        <img
          src="/assets/images/bigplane.png"
          className="w-[340px] absolute top-[calc(74%)] left-[calc(50%-173px)] "
        />

        <div
          className={`${
            time >= 4 ? "hidden" : "flex"
          } lg:items-center items-start animate-fadeinLogo opacity-0 z-10`}
        >
          <div className="flex lg:flex-row flex-col z-20 font-semibold lg:px-[70px] px-5">
            <div>
              <h2 className="uppercase lg:text-3xl text-base mb-4">
                Welcome on board with
              </h2>
              <h1 className="uppercase font-bold 2xl:text-[260px] xl:text-[180px] text-[60px] 2xl:leading-[200px] xl:leading-[160px] leading-[60px]">
                social aviator
              </h1>
            </div>

            <div className="">
              <span className="lg:text-2xl text-lg tracking-wider">
                Transforming your{" "}
                <span className="bg-primary">brand marketing </span>
                to fit the ever-evolving digital world
              </span>
              <img
                alt="arrow"
                src="/assets/images/arrow.png"
                className="pt-10 lg:mx-0 mx-auto"
              />
            </div>
          </div>
        </div>

        <div
          className={`${
            time >= 4 && time < 12 ? "flex" : "hidden"
          } lg:mt-20 mt-0 lg:ml-20 ml-5 mr-5 flex-col z-20 animate-fadeinText opacity-0`}
        >
          <h2 className="uppercase font-bold lg:text-2xl text-base mb-6 tracking-wider">
            WE ARE A DIGITAL-FIRST MARKETING COMPANY THAT PROVIDES
          </h2>
          <h1 className="uppercase font-bold 2xl:text-[120px] lg:text-[80px] text-3xl 2xl:leading-[100px] lg:leading-[80px] tracking-tighter">
            customized <p>brand solutions</p>
          </h1>
          <span className="lg:text-2xl text-base tracking-wider uppercase mt-8 font-bold">
            to help your brand{" "}
            <span className="bg-primary px-2">reach new heights.</span>
          </span>
          <p className="lg:text-2xl text-base tracking-wider uppercase font-bold">
            With our services, your brands will soar to new heights, leaving
            behind the ordinary and embrace the extraordinary. 
          </p>
        </div>

        {/* <div
          className={`${
            time >= 12 && time < 20 ? "flex" : "hidden"
          } flex-col lg:text-2xl text-base text-center xl:px-[240px] lg:px-[140px] px-8 lg:mt-40 mt-0 animate-fadeinText`}
        >
          <h1 className="font-bold mb-[60px] uppercase ">
            Why fly with Social Aviator?
          </h1>

          <p className="font-semibold mb-6 md:text-base text-xs">
            We at Social Aviator understand the importance of speed in today's
            fast-paced digital world. Our team of experts is dedicated to coming
            up with innovative trending ideas, putting together effective
            strategies, and collaborating with top-notch artists to create
            memorable campaigns and events.  By partnering with us, you can
            scale your business and achieve your objectives faster, allowing you
            to soar to greater heights. Our team consists of individuals with
            vast experience from some of the most prestigious media and
            advertising companies in the world.
          </p>

          <p className="font-semibold md:text-base text-xs">
            By partnering with us, you can scale your business and achieve your
            objectives faster, allowing you to soar to greater heights.
          </p>
          <p className="font-semibold md:text-base text-xs">
            Our team consists of individuals with vast experience from some of
            the most prestigious media and advertising companies in the world.
          </p>
        </div> */}

        <div
          className={`${time >= 12 ? "block" : "hidden"} w-full z-10`}
          onClick={() => setPlay(true)}
        >
          {!play && (
            <>
              <h1 className="md:text-4xl text-2xl uppercase font-bold md:mt-[180px] mt-[80px] text-center mb-[60px]">
                READY FOR TAKE-OFF
              </h1>

              <p className="font-semibold text-center animate-bounce">
                Enter Site
              </p>
            </>
          )}
        </div>
        {/* {play && (
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="relative w-full h-full overflow-hidden flex justify-center items-center z-0">
              <video
                preload="auto"
                playsInline
                ref={videoRef}
                className="object-cover absolute top-0 left-0 w-full h-full"
                onEnded={() => router.push("/home")}
                muted
              >
                <source
                  src="/assets/videos/video.mp4#t=0.001"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        )} */}
      </div>
    </main>
  );
}
