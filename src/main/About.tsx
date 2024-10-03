import React from "react";

type AboutProps = {
  text: string;
};

const About: React.FC<AboutProps> = ({ text }) => {
  return (
    <div className="text-balance text-justify text-lg">
      <p>{text}</p>
    </div>
  );
};

export default About;
