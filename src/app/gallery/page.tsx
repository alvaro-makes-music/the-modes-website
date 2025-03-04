import SocialMediaIcons from "@/components/SocialMediaIcons";
import MainTitle from "@/components/MainTitle";
import SectionTitle from "@/components/SectionTitle";
import Link from 'next/link';
import Gallery from '@/components/Gallery'

export default function GalleryPage() {
  return (
    <div>
      <div
        style={{height: '200vh'}}
        className="flex flex-col gap-y-20 mb-10">
        <div id="title" className="flex flex-col gap-y-1 items-center">
          <MainTitle/>
          <SocialMediaIcons/>
          <div id="gallery" className="flex flex-col gap-y-4 md:gap-y-8 font-[family-name:var(--font-almendra-regular)]">
            <SectionTitle>Gallery</SectionTitle>
            <Gallery isFull={true} />
          </div>

          <Link
            href={'/'}
            // target="_blank"
            // rel="noopener noreferrer"
            className="md:text-2xl border-2 px-2 m-10 rounded-sm transition ease-in-out scale-100 active:scale-90 duration-200 active:opacity-70"
            // active:bg-white active:text-gray-800 active:border-gray-800
            style={{ filter: 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 1)' }}
          >
            {'BACK'}
          </Link>

          <SocialMediaIcons className="pb-4 md:pb-0" />
        </div>
      </div>
    </div>
  );
}
