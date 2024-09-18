"use client";

import React, { useEffect } from "react";

interface BannerProps {
  data: string; // Correct TypeScript syntax
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  useEffect(() => {
    console.log("client", data);
  }, []);

  return (
    <div className="text-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Hello Ecom-App</h1>
        <p>Data fetched server-side: {data}</p> {/* Display the data prop */}
        <p>Let's start your development process!</p>
      </div>
    </div>
  );
};

export default Banner;

