import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
import { SideBar } from "@/components/SideBar";
import { InterestBar } from "@/components/InterestBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AppBar/>
      <div className="grid grid-cols-12">
        <div className="hidden sm:block col-span-2">
        <SideBar />
        </div>
        <div className="col-span-12 sm:col-span-10 mr-2">
          <InterestBar />
          <VideoGrid />
        </div>
      </div>
    </div>
  );
}
