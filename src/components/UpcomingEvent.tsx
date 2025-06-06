import Image from "next/image"

interface UpcomingEventProps {
  date: string,
  location: string,
  city: string,
  zip: string,
  source: string,
  width: number,
  height: number,
  altText: string,
  ticketsLink: string,
  isFree: boolean
}

export default function UpcomingEvent({ date, location, city, zip, source, width, height, altText, ticketsLink, isFree }: UpcomingEventProps) {
  return (
    <div className="flex flex-row gap-x-4">
      <div className="flex flex-col">
        <p className="md:text-2xl">{date}</p>
        <p className="text-gray-300 text-xs md:text-xl">{location}</p>
        <p className="text-gray-400 text-xs md:text-xl">{city}, {zip}</p>
      </div>
      {/* @TODO add a blurred image and base-64 url */}
      <div className="flex flex-col items-center">
        <Image
          src={"media/images/flyers/"+source}
          width={width}
          height={height}
          alt={altText}
          className="mb-2.5 md:mb-6 md:h-[350px] md:w-auto"
        />
        <a
          href={ticketsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="md:text-2xl border-2 px-2 rounded-sm transition ease-in-out scale-100 active:scale-90 duration-200 active:opacity-70"
          // active:bg-white active:text-gray-800 active:border-gray-800
          style={{ filter: 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 1)' }}
        >
          {isFree ? 'FREE EVENT' : 'TICKETS'}
        </a>
      </div>
    </div>
  )
}