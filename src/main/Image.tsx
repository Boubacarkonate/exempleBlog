import React from "react";
import image from "../assets/map.png";

type ImageProps = {
  imageName: string;
};

const Image: React.FC<ImageProps> = ({ imageName }) => {
  return (
    <div className="flex items-center justify-center">
      <img src={image} alt={imageName} className="size-3/4 object-cover" />
    </div>
  );
};

export default Image;
