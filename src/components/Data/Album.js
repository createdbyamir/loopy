'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Album({ limit }){

    let [albums, setAlbums] = useState({items: []});

    useEffect(() => {
        fetch("/api/spotify/albums")
        .then(response => response.json())
        .then(data => {
            setAlbums(data.albums);
        });
    }, []);

    const albumsItems = albums.items;

    const albumsData = limit ? albums.items.slice(0, limit) : albums.items;

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {albumsData.map((item) => (
                <li key={item.id}>
                    <Link
                        href={`/album/${item.id}`}
                        className="group block"
                    >
                        <div className="overflow-hidden bg-card">
                            <Image
                                src={item.images[1].url}
                                width={item.images[1].width}
                                height={item.images[1].height}
                                alt={`${item.name} ${item.album_type} artwork`}
                                className="w-full h-auto transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="mt-5 space-y-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                                {item.album_type}
                            </p>

                            <h2 className="text-xl uppercase group-hover:text-white transition-colors">
                                {item.name}
                            </h2>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}