import SectionTitle from "@/components/SectionTitle"
import Gallery from '@/components/Gallery'

export default function ShortGallerySection() {
    return (
        <div id="gallery" className="flex flex-col gap-y-4 font-[family-name:var(--font-almendra-regular)]">
          <SectionTitle>Gallery</SectionTitle>
          <Gallery/>
        </div>
    )
}