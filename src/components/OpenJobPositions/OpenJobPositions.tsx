import { Circle } from "lucide-react";

const OpenJobPositions = ({ jobPositions }: { jobPositions: string[] }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg  py-5  px-2 w-full h-full font-siliguri  ">
      <div>
        <h3 className="text-4xl font-semibold my-8 text-center bg-gradient-to-r from-blue-500 to-cyan-500  text-transparent bg-clip-text ">
          সম্ভাব্য কর্মক্ষেত্রসমূহ
        </h3>
      </div>
      <div className="flex flex-col items-center   text-[16px] ">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 ">
          {jobPositions?.map((jobPosition: string) => (
            <li className="flex items-center gap-3 mr-1">
              <Circle className="size-4 text-orange-500 font-bold" />
              <p className="text-[#717172] font-bold">{jobPosition}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OpenJobPositions;
