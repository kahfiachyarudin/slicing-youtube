import { User } from "lucide-react";
import Card from "./Card";

export default function Hero() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen p-6">

      <div className="grid grid-cols-4 gap-6">

        {videos.map((video, index) => (
          <Card
            key={index}
            thumbnail={video.thumbnail}
            avatar={video.avatar}
            title={video.title}
            channel={video.channel}
            views={video.views}
            uploaded={video.uploaded}
            duration={video.duration}
          />
        ))}

      </div>

    </div>
  );
}