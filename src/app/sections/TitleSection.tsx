import MainTitle from "@/components/MainTitle";
import SocialMediaIcons from "@/components/SocialMediaIcons";
import Image from "next/image";

export default function TitleSection() {
    return (
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
    )
}