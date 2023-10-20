import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ServiceTabs = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 text-black">
      <div className="col-span-2 flex justify-center">
        <Tabs
          className="w-full my-4 xl:px-20 lg:px-12 px-0"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="grid grid-cols-3 md:gap-10 gap-4 items-center justify-around my-5">
            <Tab
              className={`${
                tabIndex === 0
                  ? "bg-gold border-gold text-secondary"
                  : " border-secondary text-black"
              } flex justify-center items-center h-full cursor-pointer border-b-2 hover:bg-gold p-2 py-6 w-full text-center font-semibold transition-all md:col-span-1 col-span-1`}
            >
              SOCIAL BRAND LABS
            </Tab>
            <Tab
              className={`${
                tabIndex === 1
                  ? "bg-gold border-gold text-secondary"
                  : "border-secondary text-black"
              } flex justify-center items-center h-full cursor-pointer border-b-2 hover:bg-gold p-2 py-6 w-full text-center font-semibold transition-all md:col-span-1 col-span-1`}
            >
              SOCIAL AI
            </Tab>
            <Tab
              className={`${
                tabIndex === 2
                  ? "bg-gold border-gold text-secondary"
                  : "border-secondary text-black"
              } flex justify-center items-center h-full cursor-pointer border-b-2 hover:bg-gold p-2 py-6 w-full text-center font-semibold transition-all md:col-span-1 col-span-1`}
            >
              SOCIAL VENTURES
            </Tab>
            {/* <Tab className={`${tabIndex === 3 ? "bg-gold border-gold text-secondary" : "border-secondary text-black"} cursor-pointer border-b-2 hover:bg-gold p-2 py-6 w-full text-center font-semibold transition-all md:col-span-1 col-span-2`}>
                SOCIAL BIZ
              </Tab> */}
          </TabList>

          <TabPanel className="flex bg-[#FFF7D3]">
            <div className="col-span-2 bg-white/[.2] flex flex-col items-left justify-center w-full xl:w-3/4 min-w-fit rounded-xl md:p-14 p-8">
              <h1 className="uppercase lg:text-4xl text-2xl font-extrabold mb-8">
                Social Brand Labs
              </h1>

              <p>
                It’s a one-stop agency for effective campaigns that resonate
                with your audience, enhance brand awareness, and connect you
                with influencers. Our pros craft captivating ad films, elevating
                your brands to new heights.
              </p>
              <br />

              <ul className="text-black lg:text-lg md:text-base text-sm list-disc md:pl-6 pl-[14px] list-image-[url(/assets/svg/bullet.svg)]">
                <li className="">
                  <span className="ml-3">Influencer Collaborations</span>
                </li>
                <li>
                  <span className="ml-3">Influencer Selection & Screening</span>
                </li>
                <li>
                  <span className="ml-3">
                    Influencer Outreach & Negotiations
                  </span>
                </li>
                <li>
                  <span className="ml-3">Content Creation</span>
                </li>
                <li>
                  <span className="ml-3">Campaign Strategy</span>
                </li>
                <li>
                  <span className="ml-3">Brand Ambassador Programs</span>
                </li>
                <li>
                  <span className="ml-3">Analytics & Reporting</span>
                </li>
                <li>
                  <span className="ml-3">
                    Trend Analysis & Industry Insights
                  </span>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel className="flex bg-[#FFF7D3]">
            <div className="col-span-2 bg-white/[.2] flex flex-col items-left justify-center w-full xl:w-3/4 min-w-fit rounded-xl md:p-14 p-8">
              <h1 className="uppercase lg:text-4xl text-2xl font-extrabold mb-8">
                Social AI
              </h1>

              <p>
                Social AI leverages AI & Machine Learning to create impactful
                solutions that ensure your brand connects with the right
                audience, boosting traffic, engagement, and conversions.
              </p>
              <br />

              <ul className="text-black lg:text-lg md:text-base text-sm list-disc md:pl-6 pl-[14px] list-image-[url(/assets/svg/bullet.svg)]">
                <li>
                  <span className="ml-3">
                    AI- Enhanced Influencer Selection
                  </span>
                </li>
                <li>
                  <span className="ml-3">Fraud Detection</span>
                </li>
                <li>
                  <span className="ml-3">Influencer Audience Analysis</span>
                </li>
                <li>
                  <span className="ml-3">
                    Creating Professional Videos Powered by AI & ML
                  </span>
                </li>
                <li>
                  <span className="ml-3">
                    Brand Photoshoots Powered by AI & ML
                  </span>
                </li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel className="flex bg-[#FFF7D3]">
            <div className="col-span-2 bg-white/[.2] flex flex-col items-left justify-center w-full xl:w-3/4 min-w-fit rounded-xl md:p-14 p-8">
              <h1 className="uppercase lg:text-4xl text-2xl font-extrabold mb-8">
                Social Ventures
              </h1>

              <p>
                Social Ventures offers D2C consultancy to help influencers/
                celebrities engage fans, drive revenue and create sustainable
                businesses out of their online presence.
              </p>
              <br />

              <ul className="text-black lg:text-lg md:text-base text-sm list-disc md:pl-6 pl-[14px] list-image-[url(/assets/svg/bullet.svg)]">
                <li>
                  <span className="ml-3">
                  Identify Product Sourcing & Developing Partners 
                  </span>
                </li>
                <li>
                  <span className="ml-3">E-commerce Platform Selection & Setup</span>
                </li>
                <li>
                  <span className="ml-3">
                  Supply Chain & Logistics Optimisation
                  </span>
                </li>
                <li>
                  <span className="ml-3">
                  Customer Support & CRM
                  </span>
                </li>
                <li>
                  <span className="ml-3">
                  Brand Positioning & Strategy
                  </span>
                </li>
              </ul>
            </div>
          </TabPanel>
          {/* <TabPanel className="flex bg-[#FFF7D3]">
              <div className="col-span-2 bg-white/[.2] flex flex-col items-left justify-center w-full xl:w-3/4 min-w-fit rounded-xl md:p-14 p-8 ">
                <h1 className="uppercase lg:text-4xl text-2xl text-secondary font-extrabold mb-8">
                  Social Biz
                </h1>

                <span className="text-black lg:text-lg text-base">
                  
                  <li><span className="ml-3">Supporting SMEs across India</li>
                  <li><span className="ml-3">Creative Campaign Planning with Celebs</li>
                  <li><span className="ml-3">Partnering with celebs for long-term gains</li>
                  <li><span className="ml-3">Working together on business plans & innovations</li>
                  <br></br>
                  <br></br>
                  <br></br>
                </span>
              </div>
            </TabPanel> */}
        </Tabs>
      </div>
    </div>
  );
};

export default ServiceTabs;
