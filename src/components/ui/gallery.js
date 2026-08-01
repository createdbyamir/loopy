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

export default function Images() {
    return (
<div className="grid grid-cols-12 auto-rows-[180px] gap-4">
        {images.map((item, index) => {
          const featured = index % 6 === 0;

          return (
            <div
              key={item.id}
              className={`relative overflow-hidden border border-white/10 transition duration-300 hover:border-white/30 group
                ${
                  featured
                    ? "col-span-12 md:col-span-8 row-span-2"
                    : "col-span-6 md:col-span-4 row-span-1"
                }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <p className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-[0.3em] text-[#f0ede8] opacity-0 group-hover:opacity-100 transition">
                {item.alt}
              </p>
            </div>
          );
        })}
      </div>
    )
}