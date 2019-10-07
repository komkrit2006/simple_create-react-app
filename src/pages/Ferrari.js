import React from "react";
import DetailCar from "../components/DetailCar";
import imageFile from "../assets/ferrari.jpeg";

export default () => (
  <DetailCar
    text="Ferrari"
    imageFile={imageFile}
    description="This was a day to remember for the Ferrari Driver Academy and Robert Shwartzman as the Russian driver’s second place finish in the first F3 race of the weekend."
  />
);
