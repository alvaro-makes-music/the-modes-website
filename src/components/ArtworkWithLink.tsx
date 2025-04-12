import Image from "next/image"

interface ArtworkWithLinkProps {
  url: string,
  source: string,
  blurSource: string,
  altText: string
}

export default function ArtworkWithLink({url, source, blurSource, altText} : ArtworkWithLinkProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image
        src={source}
        width={190}
        height={190}
        placeholder="blur"
        blurDataURL={'/the-modes-website/'+blurSource}
        alt={altText}
        className="md:w-[500px] transition ease-in-out scale-100 active:scale-90 duration-200 active:opacity-70"
        style={{ filter: 'drop-shadow(3px 3px 15px rgba(0, 0, 0, 1)' }}
      />
    </a>
  )
}