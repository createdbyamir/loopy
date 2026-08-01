import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

export default function Links() {
    return (
        <ul className="flex items-center gap-6">
            <li>
                <a
                    href="https://www.instagram.com/thisloop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-110"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
            </li>

            <li>
                <a
                    href="https://www.youtube.com/channel/UCI_33dy48k18Jsw9-fpZzwg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-110"
                    aria-label="YouTube"
                >
                    <FaYoutube />
                </a>
            </li>

            <li>
                <a
                    href="https://open.spotify.com/artist/3l9s67pOK4Stw9yW1wr0Bg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-110"
                    aria-label="Spotify"
                >
                    <FaSpotify />
                </a>
            </li>
        </ul>
    );
}