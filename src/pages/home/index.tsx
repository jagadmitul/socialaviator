import { useEffect, useRef, useState } from "react";
import Link from "next/link";
//@ts-ignore
import NewsTicker, { Directions } from "react-advanced-news-ticker";
import PhotoContainer from "@/components/photo";
import TextBox from "@/components/TextBox";
import Carousel from "react-multi-carousel";
import Marquee from "react-fast-marquee";
import ExpandingCards from "@/components/expandingCards";
import {
  cardData,
  cardData2,
  caseStudies,
  tickerBoard,
  expectation,
  celebrities,
  endeavourDesc,
} from "@/constants";
import Typewriter from "typewriter-effect";
import "regenerator-runtime/runtime";
import { instgramLinks } from "@/constants/instgram";
import WorkItem from "@/components/WorkItem";
import ExpandingVideo from "@/components/ExpandingVideo";
import VideoCarousel from "@/components/VideoCarousel";
import ServiceTabs from "@/components/serviceTabs";
import OperatingProcess from "@/components/OperatingProcess";

const responsive2 = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1536,
    },
    items: 4,
  },
  desktop2: {
    breakpoint: {
      max: 1536,
      min: 1024,
    },
    items: 3,
  },
  mobile: {
    breakpoint: {
      max: 768,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 768,
    },
    items: 2,
  },
};

const HomePage = () => {
  const ref = useRef(null);
  const [expandedVideoText, setExpandedVideoText] = useState<string | null>(null);
  const [expandedVideoDesc, setExpandedVideoDesc] = useState<string | null>(null);

  const [time, setTime] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (time >= 16) setTime(0);
  }, [time]);

  return (
    <div className="w-full relative font-Mont bg-white text-black">
      <img
        alt="aviator footer"
        src="/assets/images/footer-top.png"
        className="w-full absolute -bottom-1 z-50"
      />
      <div className="relative lg:h-[100vh] h-fit bg-gold flex lg:flex-nowrap flex-wrap 2xl:gap-x-[230px] gap-x-[100px] overflow-x-hidden">
        <img
          alt="plane"
          className="w-full absolute bottom-0 z-0"
          src="assets/plane.png"
        />
        <div className="pt-[200px] lg:pl-[94px] pl-[30px] lg:pr-0 pr-[30px] 2xl:w-[730px] lg:w-[600px] w-fit z-10 relative grow flex-shrink-0">
          <p className="text-[#050505] text-2xl font-semibold mb-[40px]  animate-entrance">
            Promote your brand through
          </p>

          {/* <p className='text-secondary lg:text-[84px] text-[40px] font-bold uppercase md:leading-[75px] leading-[50px] tracking-tighter animate-entrance'>social production</p> */}
          <div className="text-4xl md:h-[150px] h-[100px] text-secondary lg:text-[84px] text-[40px] font-bold uppercase md:leading-[75px] leading-[50px] tracking-tighter">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Influencer Marketing")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Creative Ad - Films")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Artificial Intelligence")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Celebrity Ventures")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>

          <p className="text-[#050505] md:text-[15px] text-xs font-bold md:leading-7 leading-5 mt-[50px]">
            Social Aviator is not just an influencer marketer but a holistic
            solutions platform that helps your brand’s growth by conceptualising
            and executing tailored content-led strategies that help you connect
            better with your target audience.
            <br />
            <br />
            With a dynamic trio of innovative avenues – Social Brand Labs,
            Social Artificial Intelligence, Machine Learning & Social Ventures –
            we craft your brand's journey towards excellence, distinction, and
            prominence.
          </p>
          {/* <p
            className={`${
              time >= 4 ? "hidden" : "block"
            } text-[#050505] text-[15px] font-bold  leading-7 mt-[50px] animate-fadeinLogo`}
          >
            This division is dedicated to providing tailored brand solutions
            that help your brand presence reach new heights. We take the time to
            understand your unique needs and goals, and our team of experts will
            work dedicatedly to create a customized strategy that delivers
            results.
          </p>
          <p
            className={`${
              time >= 4 && time < 8 ? "block" : "hidden"
            } text-[#050505] text-[15px] font-bold  leading-7 mt-[50px] animate-fadeinLogo`}
          >
            Avail our tie-ups with state-of-the-art studios across Mumbai which
            is currently the hub for KEY influencers allowing us to create
            high-quality content that is tailored to your brand's needs and
            goals. Customize your celebrity, your experience, and your location
            all at once with Social Aviator.
          </p>
          <p
            className={`${
              time >= 8 && time < 12 ? "block" : "hidden"
            } text-[#050505] text-[15px] font-bold leading-7 mt-[50px] animate-fadeinLogo`}
          >
            Production value is what adds brilliance to any campaign, this
            division handles end-to-end production via our internal team &
            external partners, we work with some of the finest Directors, DOPs,
            Photographers, and Post-production experts who handle Animation,
            VFX, Graphics, Editing, Color Grading, Dubbing, Original Soundtrack
            creation & many more in the most cost-effective manner.
          </p>
          <p
            className={`${
              time >= 12 && time < 16 ? "block" : "hidden"
            } text-[#050505] text-[15px] font-bold  leading-7 mt-[50px] animate-fadeinLogo`}
          >
            This division focuses on Small and Medium Enterprises across India
            who are new to the world of influencer marketing but still wish to
            associate with influencers/ celebs by working out a long-term
            business association without having to pay anything upfront. We
            design a business plan which is a win-win for all parties associated
            by connecting businesses to relevant influencers/celebs
          </p> */}
        </div>

        <VideoCarousel>
          {Array(4)
            .fill("")
            .map((item, key) => (
              <div key={key} className="relative flex justify-center items-center overflow-hidden w-[400px] md:h-[397px] h-[300px] lg:rounded-[150px] md:rounded-[100px] rounded-[60px] border-[8px] border-white z-0" style={{marginRight:'20px'}}>
                <video
                  preload="auto"
                  playsInline
                  muted
                  className="absolute top-0 left-0 w-full h-full object-cover"
				  poster={"/assets/images/seqimg_" + (key + 1) + ".jpg"}
                >
                  <source
                    src={
                      "/assets/videos/Sequence_0" + (key + 1) + ".mp4#t=0.001"
                    }
                    type="video/mp4"
                  />
                </video>
              </div>
            ))}
        </VideoCarousel>
      </div>

      <div className="mt-[90px]">
        <div className="flex gap-x-4 justify-center mb-6 mx-6">
          <p className="text-primary md:text-[30px] text-3xl font-bold text-center">
            Brands Trusting Social Aviator
          </p>
          <img className="w-5" src="assets/svg/heart.svg" />
        </div>

        <Marquee>
          {Array(11)
            .fill("")
            .map((item, key) => (
              <img className="mx-4" key={key} src={`/assets/images/brands/brands${key}.png`} />
            ))}
        </Marquee>
      </div>

      <div className="mt-[90px] md:mb-[150px] mb-[50px] mx-6">
        <p className="text-primary text-3xl font-bold text-center mb-6">
          Peek Into Our Creative Endeavours
        </p>

        <div className="w-full 2xl:flex justify-center block overflow-auto">
          <div className="pt-6 flex gap-3 w-fit justify-center overflow-auto">
            {Array.from([
              "/assets/videos/01_Soha Ali Khan.mp4",
              "/assets/videos/02_Harbajan Singh.mp4",
              "/assets/videos/03_Gautam&Pankhuri.mp4",
              "/assets/videos/04_ShrutiNakul.mp4",
              "/assets/videos/05_Raashi Khanna.mp4",
              "/assets/videos/06_Mohsin Khan.mp4",
              "/assets/videos/07_Jia Shankar.mp4",
              "/assets/videos/08_Garima.mp4",
              "/assets/videos/09_Alok Nath.mp4",
              "/assets/videos/10_Shefali Bagga.mp4",
            ]).map((item, index) => (
            <ExpandingVideo
                key={index}
                video={item}
                setExpandedVideoText={setExpandedVideoText}
                setExpandedVideoDesc={setExpandedVideoDesc}
                text={celebrities[index]}
                description={endeavourDesc[index]}
              />
            ))}
          </div>
        </div>

        <p className="text-primary md:text-[28px] h-[20px] font-semibold text-center mt-6" style={{ lineHeight: '1.75rem' }}>
          {expandedVideoText ? expandedVideoText : ""}
        </p>
        <p className="text-black md:text-[24px] h-[20px] text-xl font-medium text-center mt-2">
          {expandedVideoDesc ? expandedVideoDesc : ""}
        </p>
      </div>

      <div className="py-4 lg:px-[80px] px-[27px] bg-[#894935] grid lg:grid-cols-2 grid-cols-1 gap-x-8 items-center border-0">
        <div className="col-span-1 grid gap-x-2 2xl:h-[165px] gap-y-2 md:grid-cols-2 grid-cols-1 md:text-3xl text-2xl font-normal tracking-widest">
          {tickerBoard.map((item, key) => (
            <TextBox content={item[key]} key={key}>
              <NewsTicker
                ref={ref}
                id="nt-example1"
                direction={Directions.UP}
                rowHeight={30}
                maxRows={1}
                duration={4000}
              >
                <div>{item}</div>
                <div>{item}</div>
                <div>{item}</div>
                <div>{item}</div>
              </NewsTicker>
            </TextBox>
          ))}
        </div>

        <div className="col-span-1 flex gap-x-4 items-center mt-8">
          <div className="flex flex-col gap-y-6">
            <p className="text-white font-bold md:text-[32px] text-xl uppercase leading-10">
              Your one STOP PLACE FOR CELEBRITY ENGAGEMENT
            </p>

            <div className="flex justify-between items-center">
              <Link
                href={"/contact"}
                className="flex items-center justify-center bg-secondary w-[280px] h-[44px] text-white font-semibold uppercase tracking-widest md:text-base text-sm"
              >
                Contact us
              </Link>
              <img
                alt="aviator"
                src="/assets/avatar.png"
                className="md:hidden block md:w-full w-[100px]"
              />
            </div>
          </div>

          <img
            alt="aviator"
            src="/assets/avatar.png"
            className="md:block hidden ml-auto md:w-[213px]"
          />
        </div>
      </div>

      <div className="flex flex-col bg-[#FFF7D3] w-full pt-16 lg:pb-[80px] pb-[50px] md:px-[76px] px-2 md:text-3xl text-2xl font-semibold">
        <p className="text-primary mb-10 md:text-left font-bold text-center mx-auto">
          Our Case Studies
        </p>

        <div className="grid grid-cols-3 gap-y-8">
          {caseStudies.map((item: any, key) => (
            <WorkItem
              key={key}
              className="lg:col-span-1 col-span-3 lg:!col-start-2 !col-start-1"
              title={caseStudies[key].title}
              description={caseStudies[key].description}
              link={"work"}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex">
        <h1 className="text-primary mb-10 md:text-left font-bold text-center mx-auto md:text-3xl text-2xl mt-10">
          What We Offer
        </h1>
      </div>

      <ServiceTabs />

      <OperatingProcess />

      <div className="relative flex flex-col lg:items-start items-center pb-40 xl:px-20 lg:px-12 px-6 pt-16 bg-[#FFF7D3]">
        <p className="font-bold lg:text-3xl text-2xl lg:text-left text-center">
          Ready to take your brand to greater heights?
        </p>
        <Link
          href={"/contact"}
          className="bg-secondary z-50 mt-6 w-[200px] h-[44px] text-white flex justify-center items-center font-semibold uppercase tracking-widest md:text-base text-sm"
        >
          get in touch
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
