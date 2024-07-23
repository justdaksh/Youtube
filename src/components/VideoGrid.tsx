import { InterestBar } from "./InterestBar";
import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Demo sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
  {
    title: "A Last sus Video",
    name: "John Doe",
    views: "100k views",
    time: "10 minutes ago",
    thumbimage: "Logo.png",
    image: "Photo.jpg",
  },
];

export function VideoGrid(props: any) {
  return (
    <>
      <div className="grid h-[85lvh] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 px-4 overflow-y-scroll overscroll-contain">
        {VIDEOS.map((video, index) => (
          <div key={index}>
            <VideoCard
              title={video.title}
              name={video.name}
              views={video.views}
              time={video.time}
              thumbimage={video.thumbimage}
              image={video.image}
            />
          </div>
        ))}
      </div>
    </>
  );
}
