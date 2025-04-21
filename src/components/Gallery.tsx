import galleryPics from '@/app/data/galleryPics.json'
import Image from "next/image";
import Link from 'next/link';

export default function Gallery({isFull=false, maxGalleryItems=5} : {isFull: boolean, maxGalleryItems?: number}) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-3">
      {galleryPics.map(
        (pic, index) =>{
          if (!isFull && index >= maxGalleryItems) return;
          else return (
            <div key={index} className='aspect-square overflow-hidden'>
              <Image
                src={"gallery-pics/"+pic.src}
                width={250}
                height={250}
                className='w-full h-full object-cover'
                placeholder="blur"
                blurDataURL={pic.blurURL}
                alt={pic.altText}
              />
            </div>
          )
        }
      )}

      {!isFull &&
        <div className="flex items-center justify-center">
          <Link
            href={'/gallery'}
            // target="_blank"
            // rel="noopener noreferrer"
            className="md:text-2xl border-2 px-2 rounded-sm transition ease-in-out scale-100 active:scale-90 duration-200 active:opacity-70"
            // active:bg-white active:text-gray-800 active:border-gray-800
            style={{ filter: 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 1)' }}
          >
            {'VIEW ALL'}
          </Link>
        </div>
      }
    </div>
  )
}