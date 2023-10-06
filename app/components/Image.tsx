import React from "react";
import { Id } from "../data/types";
import { products } from "../data/products"

const Image: React.FC<Id>  = ({ id }) => {
    
  const product = products.find((item) => item.id === id);
  if (!product) return <div>Image</div>;
  
  return (
    <div className={`w-[66.6666666%]  ${product.pr}`}>
      <video className="w-full h-full" autoPlay muted loop>
        <source
          src="https://videos.ctfassets.net/u1nb1km7t5q7/6OYv521nP7i1wAaGz5dhqP/c83a3696a09e71fa09c5a869f9b2c3cf/Aesop_Othertopias_2023_Web_Othertopias_Page_Secondary_4_Mid_Mobile_1920x1080px.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Image;