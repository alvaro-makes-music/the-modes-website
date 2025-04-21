import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex items-center justify-center">
      <b>{"[404 Erorr]"}</b> There may be a typo in your link, or the link may be temporarily down or obsolete.
      <br/>
      <Link
        href={'/'}
        // target="_blank"
        // rel="noopener noreferrer"
        className="md:text-2xl border-2 px-2 rounded-sm transition ease-in-out scale-100 active:scale-90 duration-200 active:opacity-70"
        // active:bg-white active:text-gray-800 active:border-gray-800
        style={{ filter: 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 1)' }}
      >
        {'Back home'}
      </Link>
    </div>
  )
}