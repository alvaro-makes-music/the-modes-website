import Link from 'next/link';
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function Custom404() {
  return (
    <div>
      <div
        // style={{ height: '200vh' }}
        className="flex flex-col items-center gap-y-10 m-10 font-[family-name:var(--font-almendra-regular)]">
        <SectionTitle>404 Page not found</SectionTitle>
        <Image
          className="md:w-[300px]"
          src={"media/images/404-images/" + "404.jpg"}
          width={250}
          height={250}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAAoACgMBIgACEQEDEQH/xAAoAAEBAQAAAAAAAAAAAAAAAAAFAwYBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAABhp4A//xAAhEAACAQMEAwEAAAAAAAAAAAABAgMAESEEBQYiEhMyQf/aAAgBAQABPwDZkR4INHEPFfX8hLhhbN8ftT8c2ETSg6xUIc3UMetcW1E67XqLTOPD2Bex6199myxySckk1//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"
          alt="Image showing a moon with a cat meme face"
        />
        There may be a typo in your link, or the link may be temporarily down or obsolete.
        <br />
        <Link
          href={'/'}
          className="md:text-2xl border-2 px-2 rounded-sm transition ease-in-out scale-100 active:scale-90 duration-200 active:opacity-70"
          // active:bg-white active:text-gray-800 active:border-gray-800
          style={{ filter: 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 1)' }}
        >
          {'Back home'}
        </Link>
      </div>
    </div>
  )
}