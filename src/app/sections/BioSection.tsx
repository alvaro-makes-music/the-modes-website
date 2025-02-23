import SectionTitle from '@/components/SectionTitle'
import Video from '@/components/Video'

export default function BioSection() {
  return (
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
  )
}