import SectionTitle from "@/components/SectionTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function ContactSection() {
    return (
        <div id="contact" className="flex flex-col gap-y-4 font-[family-name:var(--font-almendra-regular)]">
          <SectionTitle>Contact</SectionTitle>
          <div className="flex text-gray-300 gap-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="size-5 md:size-7" />
            <a href="mailto:themodesmusicgroup@gmail.com" className="underline md:text-xl">themodesmusicgroup@gmail.com</a>
          </div>
        </div>
    )
}