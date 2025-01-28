"use client"

import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, /*faChevronUp, faChevronDown*/ } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div
      // className={'fixed top-0 left-0 z-50 drop-shadow-text text-gray-300 font-[family-name:var(--font-almendra-regular)]'}
      className={'fixed top-0 right-0 z-50 drop-shadow-text text-gray-300 font-[family-name:var(--font-almendra-regular)] rounded-lg'}
      >
      <div
        // className={`text-white text-xl text-opacity-60 px-2 pl-6 pt-2 place-content-end gap-x-2 bg-black transition ${isOpen ? "bg-opacity-100" : "bg-opacity-0"}`}
        className={`text-white text-opacity-70 pr-4 pt-4 flex justify-end gap-x-2 bg-black transition ${isOpen ? "bg-opacity-100" : "bg-opacity-0"}`}
        onClick={toggleMenu}
      >
        {/*MENU <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} className="size-3" /> */}
        <FontAwesomeIcon icon={faBars} className={`size-6 transition ${isOpen ? "rotate-90" : "rotate-0"}`} />
      </div>
      {isOpen && (
        <div
          // className={'bg-black shadow-lg p-3 px-6 flex flex-col place-items-end space-y-1'}>
          className={'bg-black shadow-lg p-4 flex flex-col place-items-end space-y-1'}>
          <a
            href="#music"
            className="text-gray-300 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Music
          </a>
          <a
            href="#videos"
            className="text-gray-300 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Videos
          </a>
          <a
            href="#shop"
            className="text-gray-300 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </a>
          <a
            href="#events"
            className="text-gray-300 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Upcoming Events
          </a>
          <a
            href="#bio"
            className="text-gray-300 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Bio
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  )
}