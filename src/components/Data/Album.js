'use client'

import { useEffect, useState } from "react";

export default function Album(){

    let [album, setAlbum] = useState([])

    useEffect(() => {
        fetch("/api/spotify/albums")
        .then(response => response.json())
        .then(data => {
            setAlbum(data);
        });
    }, );

    return (
        <>
            {album.map(item => {
                <div key={item.name}>
                    <h1>{item.name}</h1>
                </div>
            })}
        </>
    )
}