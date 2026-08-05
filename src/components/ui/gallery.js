import Image from "next/image"

const images = [
    {
        id: 1,
        image: "/images/thisloop_1.jpg",
        alt: "loopy"
    },
    {
        id: 2,
        image: "/images/thisloop_2.jpg",
        alt: "loopy 2"
    },
        {
        id: 3,
        image: "/images/thisloop_3.jpg",
        alt: "loopy 3"
    },
        {
        id: 4,
        image: "/images/thisloop_4.jpg",
        alt: "loopy 4"
    },
        {
        id: 5,
        image: "/images/thisloop_5.jpg",
        alt: "loopy"
    },
        {
        id: 6,
        image: "/images/thisloop_6.jpg",
        alt: "loopy 6"
    },
        {
        id: 7,
        image: "/images/thisloop_7.jpg",
        alt: "loopy 7"
    },
        {
        id: 8,
        image: "/images/thisloop_8.jpg",
        alt: "loopy 8"
    },
        {
        id: 9,
        image: "/images/thisloop_9.jpg",
        alt: "loopy 9"
    }
]

export default function Images({ limit }) {

    const galleryData = limit ? images.slice(0, limit) : images;

    return (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {galleryData.map((item) => (
                    <li key={item.id} className="relative w-full aspect-[3/4]">
                        <Image 
                            src={item.image} 
                            alt={item.alt}
                            fill
                            className="object-cover"
                        />
                    </li>
                ))}
            </ul>
    )
}