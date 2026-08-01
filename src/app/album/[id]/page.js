'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function Album() {

    const [album, setAlbum] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/spotify/albums/${id}`)
            .then(response => response.json())
            .then(data => {
                setAlbum(data);
            });
    }, [id]);

    if (!album) {
        return <p>Loading...</p>;
    }

    const albumItem = album.albums;

    return (
        <>
            <section className="max-w-[1240px] mx-auto px-6 py-24">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

        <Image
            src={albumItem.images[0].url}
            width={albumItem.images[0].width}
            height={albumItem.images[0].height}
            alt={albumItem.name}
            className="w-full max-w-[550px] mx-auto"
        />

        <div>

            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                {albumItem.album_type}
            </p>

            <h1 className="text-5xl md:text-7xl uppercase leading-none mb-6">
                {albumItem.name}
            </h1>

            <div className="space-y-3 text-muted-foreground">

                <p>
                    Artist
                    <span className="text-white ml-3">
                        {albumItem.artists.map(a => a.name).join(", ")}
                    </span>
                </p>

                <p>
                    Released
                    <span className="text-white ml-3">
                        {albumItem.release_date}
                    </span>
                </p>

                <p>
                    Tracks
                    <span className="text-white ml-3">
                        {albumItem.total_tracks}
                    </span>
                </p>

                <p>
                    Label
                    <span className="text-white ml-3">
                        {albumItem.label}
                    </span>
                </p>

            </div>

        </div>

    </div>

    <div className="mt-24">

        <h2 className="text-3xl uppercase mb-10">
            Track List
        </h2>

        <ul className="space-y-5">

            {albumItem.tracks.items.map(track => (
                <li
                    key={track.id}
                    className="flex justify-between border-b border-border pb-4"
                >

                    <div className="flex gap-6">

                        <span className="text-muted-foreground">
                            {track.track_number}
                        </span>

                        <span>
                            {track.name}
                        </span>

                    </div>

                    <span className="text-muted-foreground">
                        {Math.floor(track.duration_ms / 60000)}:
                        {String(Math.floor((track.duration_ms % 60000) / 1000)).padStart(2, "0")}
                    </span>

                </li>
            ))}

        </ul>

    </div>

</section>
        </>
    );
}