import React from "react";
import image from "../assets/map3.png";

type ImageProps = {
  imageName: string;
};

const Image: React.FC<ImageProps> = ({ imageName }) => {
  return (
    <div className="flex items-center justify-center">
      <img src={image} alt={imageName} className="object-cover" />
    </div>
  );
};

export default Image;
