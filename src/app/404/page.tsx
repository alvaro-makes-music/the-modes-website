import Link from 'next/link';
import SectionTitle from "@/components/SectionTitle";

export default function Custom404() {
  return (
    // <div className="flex flex-col items-center justify-center font-[family-name:var(--font-almendra-regular)]">
    <div>
      <div
        style={{ height: '200vh' }}
        className="flex flex-col gap-y-20 mb-10">
        <div className="flex flex-col gap-y-1 items-center">
          <div className="flex flex-col gap-y-4 md:gap-y-8 font-[family-name:var(--font-almendra-regular)]">
            <SectionTitle>404 Page not found</SectionTitle>
            <b>{"[404 Erorr]"}</b> There may be a typo in your link, or the link may be temporarily down or obsolete.
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
      </div>
    </div>
  )
}