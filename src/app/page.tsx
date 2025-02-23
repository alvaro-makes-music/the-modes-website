"use client"
import BackgroundImage from "@/components/BackgroundImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Image from "next/image";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import ArtworkWithLink from "@/components/ArtworkWithLink";
import UpcomingEvent from "@/components/UpcomingEvent";
import Video from "@/components/Video";
import MainTitle from "@/components/MainTitle";
import SectionTitle from "@/components/SectionTitle";
import NavBar from "@/components/NavBar";
import Link from 'next/link';
import artworks from '@/app/data/artworks.json'
import galleryPics from '@/app/data/galleryPics.json'
import videos from '@/app/data/videos.json'


export default function Home() {
  return (
    <div>
      <BackgroundImage />
      <NavBar />
      <div style={{
        height: '200vh', padding: '2rem',
        // paddingTop: '4rem'
      }} className="flex flex-col gap-y-20 mb-100">
        <div id="title" className="flex flex-col gap-y-1 items-center">
          <MainTitle>THE MODES</MainTitle>
          <SocialMediaIcons />
          <Image
            className="md:w-[600px]"
            src={'/the-modes-website' + "/how-many-moons-cover.png"}
            width={250}
            height={250}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgT/xAAeEAABAwUBAQAAAAAAAAAAAAABAgMEAAUREiEGcf/EABUBAQEAAAAAAAAAAAAAAAAAAAEE/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECMWH/2gAMAwEAAhEDEQA/ACI9XDg3ycy/HuDiA66jbZSgDuRwZp3b7pEk22K+hD4Q6yhaQo9wQD3tJFgAjAAyO4+1ET2qHdvWDrh//9k="
            alt="Artwork for The Modes new album, How Many Moons. The picture shows the three members of the band sitting on a bench by the beach, with a sky at dawn full of stars and with a big moon in the middle. The artwork includes a parental advisory explicit content warning."
          />
        </div>
        <div id="music" className="flex flex-col gap-y-4 md:gap-y-10">
          <SectionTitle>Music</SectionTitle>
          <div className="flex flex-col items-center gap-y-5 md:gap-y-9">
            {artworks.map(artwork => (
              <ArtworkWithLink
                key={artwork.id}
                url={artwork.url}
                source={`/${artwork.source}`}
                blurSource={artwork.blurSource}
                altText={artwork.altText}
              />
            ))}
          </div>
        </div>
        <div id="videos" className="flex flex-col gap-y-4">
          <SectionTitle>Videos</SectionTitle>
          <div className="flex flex-col items-center px-3 gap-8 md:gap-14">
            {videos.map(video => (
              <Video
                key={video.id}
                src={video.src}
                title={video.title}
              />
            ))}
          </div>
        </div>
        <div id="shop" className="flex flex-col gap-y-4 font-[family-name:var(--font-almendra-regular)]">
          <SectionTitle>Shop</SectionTitle>
          <div className="flex flex-col items-center gap-y-5">
            <p className="drop-shadow-text md:text-xl">Coming soon!</p>
          </div>
        </div>
        <div id="events" className="flex flex-col gap-y-4 font-[family-name:var(--font-almendra-regular)]">
          <SectionTitle>Upcoming Events</SectionTitle>
          <div className="flex flex-col items-center gap-y-5">
            <p className="drop-shadow-text md:text-xl">Coming up soon!</p>
            <UpcomingEvent
              date="OCT 21, 2024"
              location="Marina Wine"
              city="Long Beach"
              zip="CA"
              source="/flyer-marina-wine-oct-21-2024.jpg"
              width={180}
              height={424}
              altText="Flyer for a The Modes show on Oct 21st, 2024 at 7 to 9 pm, at the Marina Wine. The poster shows an image of Tom and Aziza wearing black t-shirts and sunglasses, and two glasses of wine. The poster reads Come Join Us! Live Performance. The location of the venue is 194 North Marina Drive Unit 101, Long Beach, California, 90803."
              ticketsLink="https://www.google.com"
              isFree={false}
            />
          </div>
        </div>
        <div id="bio" className="flex flex-col gap-y-4 font-[family-name:var(--font-almendra-regular)]">
          <SectionTitle>Bio</SectionTitle>
          <div className="flex flex-col text-justify text-sm text-gray-300 md:text-2xl">
            <p className="drop-shadow-text">Formed in 2018, The Modes are an eclectic Pop Trio based in SoCal. Inspired by a wide range of genres, each member brings their own a unique tastes to form the group’s sound.</p>
            <p className="drop-shadow-text">The Modes have performed locally from Los Angeles to Orange County, and are currently finalizing their first EP titled ‘SUPERNOVA’.</p>
            <br />
            <p className="drop-shadow-text">The Modes consist of:</p>
            <ul className="list-disc pl-5 space-y-2 drop-shadow-text">
              <li>Aziza Gomez: Vocalist / Lyricist / Saxophonist / Supporting Keyboardist</li>
              <li>Tom Skies: Vocalist / Lyricist / Keyboardist / Producer</li>
              <li>JJ Santana: Executive Producer</li>
            </ul>
            <br />
            <div className="flex flex-col items-center px-3">
              <Video
                src="https://www.youtube.com/embed/oadA69GFgLI"
                title="Who Are The Modes?"
              />
            </div>
          </div>
        </div>
        <div id="gallery" className="flex flex-col gap-y-4 font-[family-name:var(--font-almendra-regular)]">
          <SectionTitle>Gallery</SectionTitle>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-3">
            {/* @TODO */}
            {galleryPics.map((pic, index) => {
              if (index < 5) return (
                <Image
                  key={pic.id}
                  src={'/the-modes-website/' + pic.src}
                  width={250}
                  height={250}
                  placeholder="blur"
                  blurDataURL={pic.blurURL}
                  alt={pic.altText}
                />
            )})}
            <div className="flex items-center justify-center">
              <Link
                href={'/gallery'}
                // target="_blank"
                // rel="noopener noreferrer"
                className="md:text-2xl border-2 px-2 rounded-sm transition ease-in-out scale-100 active:scale-90 duration-200 active:opacity-70"
                // active:bg-white active:text-gray-800 active:border-gray-800
                style={{ filter: 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 1)' }}
              >
                {'VIEW ALL'}
              </Link>
            </div>
          </div>
        </div>
        <div id="contact" className="flex flex-col gap-y-4 font-[family-name:var(--font-almendra-regular)]">
          <SectionTitle>Contact</SectionTitle>
          <div className="flex text-gray-300 gap-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="size-5 md:size-7" />
            <a href="mailto:themodesmusicgroup@gmail.com" className="underline md:text-xl">themodesmusicgroup@gmail.com</a>
          </div>
        </div>
        <SocialMediaIcons className="pb-4" />
      </div>
    </div>
  );
}
