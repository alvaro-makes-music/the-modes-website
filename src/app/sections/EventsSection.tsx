import SectionTitle from "@/components/SectionTitle"
import UpcomingEvent from "@/components/UpcomingEvent"

export default function EventsSection() {
  return (
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
  )
}