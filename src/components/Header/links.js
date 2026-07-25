import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";


export default function Links() {
    return (
        <ul className="flex gap-5">
            <li><a target="_blank" href="https://www.instagram.com/thisloop"><FaInstagram /></a></li>
            <li><a target="_blank" href="https://www.youtube.com/channel/UCI_33dy48k18Jsw9-fpZzwg"><FaYoutube /></a></li>
            <li><a target="_blank" href="https://open.spotify.com/artist/3l9s67pOK4Stw9yW1wr0Bg"><FaSpotify /></a></li>
        </ul>
    )
}