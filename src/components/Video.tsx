interface VideoProps {
  src: string,
  title: string,
}

export default function Video({ src, title }: VideoProps) {
  return (
    <iframe
      className="w-full md:h-[400px] md:w-[600px]"
      src={src}
      title={title}
      // width={"100%"}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ filter: 'drop-shadow(3px 3px 15px rgba(0, 0, 0, 1)' }}
    />
  )
}