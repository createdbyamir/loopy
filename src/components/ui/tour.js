

const tourData = [
  {
    id: 1,
    date: "2026-09-12",
    name: "Loopy Live",
    city: "Seoul",
    country: "South Korea",
    venue: "Rolling Hall",
    status: "upcoming",
  },
  {
    id: 2,
    date: "2026-09-19",
    name: "Loopy Live",
    city: "Busan",
    country: "South Korea",
    venue: "Busan Citizens Hall",
    status: "upcoming",
  },
  {
    id: 3,
    date: "2026-10-03",
    name: "No Fear Tour",
    city: "Tokyo",
    country: "Japan",
    venue: "Shibuya Club Quattro",
    status: "sold-out",
  },
  {
    id: 4,
    date: "2026-10-10",
    name: "No Fear Tour",
    city: "Osaka",
    country: "Japan",
    venue: "Umeda Club Quattro",
    status: "upcoming",
  },
  {
    id: 5,
    date: "2026-10-24",
    name: "Loopy Live",
    city: "London",
    country: "United Kingdom",
    venue: "Electric Ballroom",
    status: "upcoming",
  },
  {
    id: 6,
    date: "2026-10-31",
    name: "Loopy Live",
    city: "Paris",
    country: "France",
    venue: "Le Trabendo",
    status: "upcoming",
  },
  {
    id: 7,
    date: "2026-11-07",
    name: "No Fear Tour",
    city: "Berlin",
    country: "Germany",
    venue: "Lido Berlin",
    status: "cancelled",
  },
  {
    id: 8,
    date: "2026-11-21",
    name: "No Fear Tour",
    city: "Los Angeles",
    country: "United States",
    venue: "The Roxy Theatre",
    status: "upcoming",
  },
];



export default function Tourdates({ limit }) {

    const displayedTours = limit ? tourData.slice(0, limit) : tourData;

    return (
        <ul className="">
            {displayedTours.map((tourItem) => (
                <li
                    key={tourItem.id}
                    className="
                    grid gap-4
                    border-b border-white/15
                    py-6
                    md:grid-cols-[120px_1fr_1fr_auto]
                    md:items-center
                "
                >
                <time
                    dateTime={tourItem.date}
                    className="font-mono text-sm uppercase text-white/60"
                >
                    {tourItem.date}
                </time>

                <h2 className="text-xl font-semibold uppercase">
                    {tourItem.name}
                </h2>

                <div>
                    <p className="font-medium">
                    {tourItem.city}, {tourItem.country}
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                    {tourItem.venue}
                    </p>
                </div>

                <span className="w-fit rounded-full border border-white/20 px-3 py-1 font-mono text-xs uppercase tracking-wider">
                    {tourItem.status}
                </span>
                </li>
            ))}
        </ul>
    )
}