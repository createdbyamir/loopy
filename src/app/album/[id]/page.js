'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Album(){

    let [album, setAlbum] = useState({albums: []})
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/spotify/albums/${id}`)
        .then(response => response.json())
        .then(data => {
            setAlbum(data);
            console.log(data);
        });
    }, []);

    const albumItem = album.albums;

    return (
        <>
            <h1 className="text-center text-6xl uppercase pb-4">{albumItem.name}</h1>
        </>
    )
}