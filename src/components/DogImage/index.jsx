import React, { useState, useEffect } from "react";

export const DogImage = ({ breed }) => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data.message);
        });
    }, [breed]);

    return <div>{imageUrl && <img src={imageUrl} alt={breed} />}</div>;
};
