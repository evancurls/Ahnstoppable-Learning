import React from "react";
import studentPhotos from "../assets/studentPhotos/studentPhotos";
import Photo from "./Photo";

function PhotoHeader(){
    const shuffledPhotos = [...studentPhotos].sort(() => (0.5 - Math.random()));
    const selectedPhotos = shuffledPhotos.slice(0, 6);
    return (
        <div>
            {selectedPhotos.map((url, index) => (
                <Photo key={index} src={url} alt={`Gallery ${index}`} />
            ))}
        </div>
    );
}

export default PhotoHeader