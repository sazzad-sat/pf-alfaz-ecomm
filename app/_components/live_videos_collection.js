import LiveVideoCard from "@/app/_components/live_video_card";
import Image from "next/image";
import expandRightIcon from "@/app/_components/assets/expand_right.svg";
import {liveVideosData} from "@/app/_components/data";

export default function LiveVideosCollection() {
  return (
    <div className="container xl:w-[76.25rem]">
      <div className="bg-white px-6 py-3 flex flex-col gap-4 overflow-x-auto">
        <div className="flex justify-between sticky top-0 left-0">
          <div className="text-primary-600 text-xl">Alzaf Live</div>
          <button className="text-primary-500 flex">See more <Image src={expandRightIcon} alt="icon"/></button>
        </div>

        <div className="flex gap-3">
          {liveVideosData.map(data => (
            <LiveVideoCard data={data}/>
          ))}
        </div>
      </div>
    </div>

  );
}