import React from "react";
import studentPhotos from "../assets/studentPhotos/studentPhotos";
import Photo from "./Photo";

function PhotoHeader(){
    const shuffledPhotos = [...studentPhotos].sort(() => (0.5 - Math.random()));
    const selectedPhotos = shuffledPhotos.slice(0, 6);
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {selectedPhotos.map((url, index) => (
                <Photo className="w-[15%] aspect-3/2 object-cover rounded-lg" key={index} src={url} alt={`Gallery ${index}`} />
            ))}
        </div>
    );
}

export default PhotoHeader