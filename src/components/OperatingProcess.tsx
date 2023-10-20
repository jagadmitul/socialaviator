import { expectation } from "@/constants";

const OperatingProcess = () => {
  return (
    <div className="pt-20 xl:px-20 lg:px-12 px-6 md:pb-32 pb-16 z-10">
      <p className="text-primary lg:text-3xl text-2xl font-bold text-center">
        Our Standard Operating Processes
      </p>

      <div className="md:mt-16 mt-8 grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-[50px] gap-[20px]">
        {expectation.map((item, key) => (
          <div key={key} className="bg-gold md:p-10 p-4 rounded-2xl">
            <img
              className="mx-auto"
              src={"/assets/svg/" + item.icon + ".svg"}
            />

            <h1 className="lg:text-lg text-base font-bold mt-6 text-center">
              {item.subTitle}
            </h1>
            <p className="lg:text-lg text-base text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperatingProcess;
