import Tourdates from "@/components/ui/tour";
import Album from "@/components/Data/Album";
import Images from "@/components/ui/gallery";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-6 py-24">
      <section className="mb-28">
        <div className="flex items-end justify-between gap-6 border-b border-white/20 pb-4 mb-8">
          <h2 className="text-3xl md:text-5xl uppercase tracking-tight">
            Latest tracks
          </h2>

          <Link
            href="/music"
            className="shrink-0 font-mono text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white"
          >
            View all songs →
          </Link>
        </div>

        <Album limit={4} />
      </section>

      <section className="mb-28">
        <div className="flex items-end justify-between gap-6 border-b border-white/20 pb-4 mb-8">
          <h2 className="text-3xl md:text-5xl uppercase tracking-tight">
            Tour dates
          </h2>

          <Link
            href="/tour"
            className="shrink-0 font-mono text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white"
          >
            View all dates →
          </Link>
        </div>

        <Tourdates limit={5} />
      </section>

      <section>
        <div className="flex items-end justify-between gap-6 border-b border-white/20 pb-4 mb-8">
          <h2 className="text-3xl md:text-5xl uppercase tracking-tight">
            Gallery
          </h2>

          <Link
            href="/gallery"
            className="shrink-0 font-mono text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white"
          >
            View all images →
          </Link>
        </div>

        <Images limit={4} />
      </section>
    </main>
  );
}