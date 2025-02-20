import { faInstagram, faSquareFacebook, faTiktok, faYoutube, faSpotify, faApple, faBandcamp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialMediaProps {
    className?: string
}

export default function SocialMediaIcons({className = ''} : SocialMediaProps) {
    const iconTailwindStyle = "md:size-8 size-5 text-white transition ease-in-out active:text-gray-500 active:scale-90 duration-200"
    return (
        <div className={`flex flex-row justify-center gap-x-2 md:gap-x-3.5 md:mb-14 mb-6 ${className}`} style={{ filter: 'drop-shadow(3px 3px 6px rgba(0, 240, 240, 0.7)' }}>
            <a
                href="https://www.instagram.com/themodesmusic/"
                target="_blank">
                <FontAwesomeIcon icon={faInstagram} className={iconTailwindStyle} />
            </a>
            <a
                href="https://open.spotify.com/artist/3YQcsLqPJkb7LKpWuMlEXv?si=GT6Ac9lKSAqj-q3fJAL1Fg"
                target="_blank">
                <FontAwesomeIcon icon={faSpotify} className={iconTailwindStyle} />
            </a>
            <a
                href="https://www.youtube.com/channel/UCRxokJjkyaMAGLv8wpC4dWw"
                target="_blank">
                <FontAwesomeIcon icon={faYoutube} className={iconTailwindStyle} />
            </a>
            <a
                href="https://music.apple.com/gb/artist/the-modes/1572774046"
                target="_blank">
                <FontAwesomeIcon icon={faApple} className={iconTailwindStyle} />
            </a>
            <a
                href="https://www.tiktok.com/@themodesmusic"
                target="_blank">
                <FontAwesomeIcon icon={faTiktok} className={iconTailwindStyle} />
            </a>
            <a
                href="https://www.facebook.com/profile.php?id=100094334294805"
                target="_blank">
                <FontAwesomeIcon icon={faSquareFacebook} className={iconTailwindStyle} />
            </a>
            <a
                href="https://themodesmusic.bandcamp.com/dashboard"
                target="_blank">
                <FontAwesomeIcon icon={faBandcamp} className={iconTailwindStyle} />
            </a>
        </div>
    )
}