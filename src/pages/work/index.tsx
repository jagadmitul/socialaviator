import Link from "next/link";

const CaseStudy = () => {
  return (
    <div className="relative font-Mont bg-white text-black">
      <img
        alt="aviator footer"
        src="/assets/images/footer-top.png"
        className="w-full absolute -bottom-1 -z-1"
      />
      <div className="w-full h-96 bg-gold pt-[174px]">
        <p className="lg:text-2xl text-xl font-semibold text-center">
          Case Study
        </p>
        <p className="text-secondary lg:text-[84px] text-6xl uppercase font-extrabold text-center tracking-tight">
          Secret Temptation
        </p>
      </div>

      <div className="py-16 xl:px-24 lg:px-12 px-6">
        <p className="text-primary lg:text-2xl text-base font-bold text-center">
          From the house of Mcnroe, a recognized expert in fragrances and
          perfumes, Secret Temptation is a well-known leading female
          grooming-personal care brand, known best for its extensive range of
          Deodorants and Perfume. It is one of the top deodorant brands by the
          virtue of its exceptional quality and fragrance range. 
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 md:px-[100px] px-6 items-center gap-x-32 py-16 gap-y-8">
        <img
          className="col-span-1"
          alt=""
          src="/assets/images/casestudy1.jpg"
        />
        <div className="col-span-1">
          <h1 className="md:text-3xl text-2xl text-primary font-bold">
            Campaign Objective
          </h1>
          <br />
          <p className="md:text-2xl text-lg">
            To bring on board a suitable face for their brand especially from
            the south market to drive awareness & interest for the launch of its
            new perfume roll on.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 md:px-[100px] px-6 items-center gap-x-32 bg-[#F7F7F7] pt-12">
        <div className="col-span-1">
          <h1 className="md:text-3xl text-2xl text-primary font-bold">
            Social Aviator’s Creative Solution
          </h1>
          <br />
          <p className="md:text-2xl text-lg">
            We identified the most relevant talent and collaborated with Secret
            Temptation to build a credible & sustainable 3 month long campaign
            with digital medium usage rights which will be leveraged to build
            the brand visibility & attain their market share simultaneously.  
          </p>
          <br />
          <p className="md:text-2xl text-lg">
            We conceptualised & executed an end-to-end campaign with the help of
            all our divisions – Social Labs & Social Production by creating
            videos & image assets for the brand which will be used on digital
            mediums
          </p>
        </div>

        <img
          className="col-span-1"
          alt=""
          src="/assets/images/casestudy3.jpg"
        />
      </div>

      <div className="py-20 border-b border-[#B6B6B6] px-6">
        <h1 className="md:text-3xl text-2xl text-primary font-bold text-center">
          Social Aviator’s Creative Solution
        </h1>
        <p className="md:text-2xl text-lg mt-8 text-center">
          Identified Raashi Khanna as a famous south indian celebrity as an
          ideal fitment that is most relevant for the desired TG
        </p>
        <img
          className="mx-auto mt-12"
          alt=""
          src="/assets/images/casestudy2.jpg"
        />
      </div>

      <div className="md:px-20 px-6 py-20">
        <h1 className="md:text-3xl text-2xl text-primary font-bold">
          Conclusion
        </h1>
        <p className="md:text-2xl text-lg mt-8">
          The campaign achieved significant reach, high engagement, and positive
          feedback.  This case study demonstrates the power of strategic
          partnerships in driving impactful awareness campaigns.
        </p>
      </div>

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

export default CaseStudy;
