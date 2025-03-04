import SectionTitle from "@/components/SectionTitle"
import UpcomingEvent from "@/components/UpcomingEvent"
import events from '@/app/data/events.json'

export default function EventsSection() {
  return (
    <div id="events" className="flex flex-col gap-y-4 font-[family-name:var(--font-almendra-regular)]">
      <SectionTitle>Upcoming Events</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8">
        {events.map((event, index) => (
          <UpcomingEvent
            key = {index}
            date = {event.date}
            location = {event.location}
            city = {event.city}
            zip = {event.zip}
            source = {`/${event.source}`}
            width = {180}
            height = {424}
            altText = {event.altText}
            ticketsLink = {event.ticketsLink}
            isFree = {event.isFree}
          />
        ))}
      </div>
    </div>
  )
}