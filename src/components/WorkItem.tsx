import Link from "next/link";

interface Props {
  title: string;
  description: string;
  link: string;
  className: string;
}

const WorkItem = ({ title, description, link, className }: Props) => {
  return (
    <div className={`${className} flex flex-col bg-[#D5413F] rounded-3xl mx-5 overflow-hidden group duration-150`}>
      <div className="relative h-[300px] overflow-hidden" style={{height:'auto'}}>
        <img className="w-full mx-auto" src="/assets/images/case_study.png" alt="" />
      </div>
      <div className="flex flex-col gap-4 p-10 grow text-center">
        <h3 className="md:text-2xl text-xl font-bold text-white">{title}</h3>
        <p className="md:text-lg text-sm text-white font-normal !leading-6">{description}</p>
        <Link
          className="md:text-lg text-base mx-auto text-txtGold w-fit px-3 py-1 font-[500] group-hover:text-white uppercase tracking-widest mt-auto"
          href={link}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default WorkItem;
