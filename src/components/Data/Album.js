'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Album(){

    let [albums, setAlbums] = useState({items: []});

    useEffect(() => {
        fetch("/api/spotify/albums")
        .then(response => response.json())
        .then(data => {
            setAlbums(data.albums);
        });
    }, []);

    const albumsItems = albums.items;

    return (
        <>
            <h1 className="text-center text-6xl uppercase pb-4">Music</h1>
            <ul>
                {albumsItems.map(item => {
                    return (
                        <li key={item.name}>
                            <Link href={`/album/${item.id}`}>
                                <Image 
                                    src={item.images[1].url} 
                                    height={item.images[1].height} 
                                    width={item.images[1].width}
                                    alt={`${item.name} ${item.album_type} art`}
                                />
                                <h1>{item.name}</h1>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}