import SectionTitle from "@/components/SectionTitle";
import artworks from '@/app/data/artworks.json'
import ArtworkWithLink from "@/components/ArtworkWithLink";

export default function MusicSection() {
    return (
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
    )
}