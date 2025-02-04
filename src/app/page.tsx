import BackgroundImage from "@/components/BackgroundImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Image from "next/image";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import ArtworkWithLink from "@/components/ArtworkWithLink";
import UpcomingEvent from "@/components/UpcomingEvent";
import Video from "@/components/Video";
import Title1 from "@/components/Title1";
import Title2 from "@/components/Title2";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <BackgroundImage/>
      <NavBar/>
      <div style={{
          height: '200vh', padding: '2rem',
          // paddingTop: '4rem'
         }} className="flex flex-col gap-y-20 mb-100">
        <div id="title" className="flex flex-col gap-y-1 items-center">
          <Title1>THE MODES</Title1>
          <SocialMediaIcons/>
          <Image
            src={'/the-modes-website'+"/how-many-moons-cover.png"}
            width={250}
            height={250}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgT/xAAeEAABAwUBAQAAAAAAAAAAAAABAgMEAAUREiEGcf/EABUBAQEAAAAAAAAAAAAAAAAAAAEE/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECMWH/2gAMAwEAAhEDEQA/ACI9XDg3ycy/HuDiA66jbZSgDuRwZp3b7pEk22K+hD4Q6yhaQo9wQD3tJFgAjAAyO4+1ET2qHdvWDrh//9k="
            alt="Artwork for The Modes new album, How Many Moons. The picture shows the three members of the band sitting on a bench by the beach, with a sky at dawn full of stars and with a big moon in the middle. The artwork includes a parental advisory explicit content warning."
          />
        </div>
        <div id="music" className="flex flex-col gap-y-4">
          <Title2>Music</Title2>
          <div className="flex flex-col items-center gap-y-5">
            <ArtworkWithLink
              url="https://www.google.com"
              source="/crashin-official-cover-art-the-modes-2.jpg"
              blurSource="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwQF/8QAIxAAAQMDAgcAAAAAAAAAAAAAAQIDEQAEQSEiBRIxUVKS0f/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQEBAQEBAAAAAAAAAAAAAAABAgARIf/aAAwDAQACEQMRAD8AMLbgrztiu7cetmW0zAedCVrjCBqScYrNgeSPcfaob2kEaEkTGdaYloTzq2jr2oIFXrntgDzf/9k="
              altText="Artwork for The Modes' single, Crashin'. The picture shows a car in flames on a road with trees, at night with a moon in the background. The artwork includes a parental advisory explicit content warning."
            />
            <ArtworkWithLink
              url="https://www.google.com"
              source="/fly-the-modes-official-cover-art.jpg"
              blurSource="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEB//EACIQAAEDAgYDAAAAAAAAAAAAAAEAAhIDEQQTITFDkVJhgf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQISYf/aAAwDAQACEQMRAD8AxaWF46JcZi4c4g29fU/IojSdHsqawhsEIt8R0ksA4af/2Q=="
              altText="Artwork for The Modes' single, Fly. The picture shows the three members of the band in a dark room. Jesus and Aziza are looking away; Aziza is resting on Jesus's shoulder. Tom is looking down while holding his glasses."
            />
            <ArtworkWithLink
              url="https://www.google.com"
              source="/how-many-moons-cover.png"
              blurSource="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgT/xAAeEAABAwUBAQAAAAAAAAAAAAABAgMEAAUREiEGcf/EABUBAQEAAAAAAAAAAAAAAAAAAAEE/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECMWH/2gAMAwEAAhEDEQA/ACI9XDg3ycy/HuDiA66jbZSgDuRwZp3b7pEk22K+hD4Q6yhaQo9wQD3tJFgAjAAyO4+1ET2qHdvWDrh//9k="
              altText="Artwork for The Modes' album, How Many Moons. The picture shows the three members of the band sitting on a bench by the beach, with a sky at dawn full of stars and with a big moon in the middle. The artwork includes a parental advisory explicit content warning."
            />
          </div>
        </div>
        <div id="videos" className="flex flex-col gap-y-4">
          <Title2>Videos</Title2>
          <div className="flex flex-col items-center px-3 gap-8">
            <Video
              src="https://www.youtube.com/embed/oadA69GFgLI"
              title="Who Are The Modes?"
            />
            <Video
              src="https://www.youtube.com/embed/0eo0_cXuf9U"
              title="Crashin (Official Music Video)"
            />
          </div>
        </div>
        <div id="shop" className="flex flex-col gap-y-4 font-[family-name:var(--font-almendra-regular)]">
          <Title2>Shop</Title2>
          <div className="flex flex-col items-center gap-y-5">
            <p className="drop-shadow-text">Coming soon!</p>
          </div>
        </div>
        <div id="events" className="flex flex-col gap-y-4 font-[family-name:var(--font-almendra-regular)]">
          <Title2>Upcoming Events</Title2>
          <div className="flex flex-col items-center gap-y-5">
            <p className="drop-shadow-text">Coming up soon!</p>
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
          <Title2>Bio</Title2>
          <div className="flex flex-col text-justify text-sm text-gray-300">
            <p className="drop-shadow-text">Formed in 2018, The Modes are an eclectic Pop Trio based in SoCal. Inspired by a wide range of genres, each member brings their own a unique tastes to form the group’s sound. The Modes have performed locally from Los Angeles to Orange County, and are currently finalizing their first EP titled ‘SUPERNOVA’.</p>
            <br />
            <p className="drop-shadow-text">The Modes consists of:</p>
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
        <div id="contact" className="flex flex-col gap-y-4 font-[family-name:var(--font-almendra-regular)]">
          <Title2>Contact</Title2>
          <div className="flex text-gray-300 gap-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="size-5" />
            <a href="mailto:themodesmusicgroup@gmail.com" className="underline">themodesmusicgroup@gmail.com</a>
          </div>
        </div>
        <SocialMediaIcons className="pb-4"/>
      </div>
    </div>
  );
}
