'use client'

import { useEffect } from "react";

export default function Data(){
    useEffect(() => {
        fetch("/api/spotify")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    });

    return (
        <>

        </>
    )
}