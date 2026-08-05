import Album from "@/components/Data/Album"
import Artist from "@/components/Data/Artist"

export default function Music(){
    return (
        <section className="max-w-[1240px] mx-auto px-6 py-24">
            <h1 className="text-center text-6xl md:text-8xl uppercase tracking-wider mb-16">
                Music
            </h1>
            <Album />
        </section>
    )
}