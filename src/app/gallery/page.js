import Images from "@/components/ui/gallery"

export default function Gallery(){
    return (
        <section className="max-w-[1240px] mx-auto px-6 py-24">
            <h1 className="text-center text-6xl md:text-8xl uppercase tracking-wider mb-16">
                Gallery
            </h1>
            <Images />
        </section>
    )
}