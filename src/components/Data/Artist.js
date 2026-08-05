'use client'

import { useEffect } from "react";

export default function Artist(){
    useEffect(() => {
        fetch("/api/spotify/artist")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }, []);

    return (
        <>

        </>
    )
}