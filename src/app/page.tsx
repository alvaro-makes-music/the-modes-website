"use client"
import BackgroundImage from "@/components/BackgroundImage";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import NavBar from "@/components/NavBar";
import TitleSection from '@/app/sections/TitleSection'
import MusicSection from '@/app/sections/MusicSection'
import VideoSection from '@/app/sections/VideosSection'
import ShopSection from '@/app/sections/ShopSection'
import EventsSection from '@/app/sections/EventsSection'
import BioSection from '@/app/sections/BioSection'
import ShortGallerySection from '@/app/sections/ShortGallerySection'
import ContactSection from '@/app/sections/ContactSection'

export default function Home() {
  return (
    <div>
      <BackgroundImage />
      <NavBar />
      <div style={{height: '200vh', padding: '2rem',}} className="flex flex-col gap-y-20 mb-100">
        <TitleSection/>
        <MusicSection/>
        <VideoSection/>
        <ShopSection/>
        <VideoSection/>
        <EventsSection/>
        <BioSection/>
        <ShortGallerySection/>
        <ContactSection/>
        <SocialMediaIcons className="pb-4" />
      </div>
    </div>
  );
}
