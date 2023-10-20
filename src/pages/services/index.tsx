import { useState } from "react";
import { expectation } from "@/constants";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OperatingProcess from "@/components/OperatingProcess";
import ServiceTabs from "@/components/serviceTabs";

const Services = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <div className="relative font-Mont bg-white text-black">
      <img
        alt="aviator footer"
        src="/assets/images/footer-top.png"
        className="w-full absolute -bottom-1 -z-1"
      />
      <div className="w-full h-96 bg-gold pt-[174px]">
        <p className="lg:text-2xl text-xl font-semibold text-center">
          What do we offer
        </p>
        <p className="text-secondary lg:text-[84px] text-6xl uppercase font-extrabold text-center tracking-tight">
          SERVICES
        </p>
      </div>

      <div className="py-16 xl:px-24 lg:px-12 px-6">
        <p className="text-primary lg:text-2xl text-base font-bold text-center">
          Social Aviator is created by a group of Creative Maketing enthusiasts
          with more than 3 decades of combined experience, who want to redefine
          the way we look at brand solutions, by making infleuncer-led
          strategies the forefront of their communication. With a strong hold on
          brands in consumer electronics, e-commerce, food & beverages, and
          other sectors, we have delivered various successful campaigns that
          have helped brands create a direct connect with consumers.
        </p>
      </div>

      <ServiceTabs />

      <OperatingProcess />

      <div className="bg-[#FFF7D3] pt-20 xl:px-20 lg:px-12 px-6 pb-32 z-10">
        <div className="relative flex flex-col lg:items-start items-center z-50">
          <p className="font-bold lg:text-3xl text-2xl lg:text-left text-center">
            Ready to take your brand to greater heights?
          </p>
          <Link
            href={"/contact"}
            className="bg-secondary mt-6 w-[200px] h-[44px] text-white flex justify-center items-center font-semibold uppercase tracking-widest md:text-base text-sm"
          >
            get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
