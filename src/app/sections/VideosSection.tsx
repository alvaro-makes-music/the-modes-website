import videos from '@/app/data/videos.json'
import SectionTitle from "@/components/SectionTitle";
import Video from '@/components/Video'

export default function VideoSection() {
  return (
    <div id="videos" className="flex flex-col gap-y-4">
      <SectionTitle>Videos</SectionTitle>
      <div className="flex flex-col items-center px-3 gap-8 md:gap-14">
        {videos.map((video, index) => (
          <Video
            key={index}
            src={video.src}
            title={video.title}
          />
        ))}
      </div>
    </div>
  )
}