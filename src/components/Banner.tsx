"use client"; // This ensures the component is rendered on the client

import React, { useEffect } from "react";

interface BannerProps {
  data: string;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  useEffect(() => {
    console.log("client-side data:", data);
  }, [data]); // Add data as a dependency

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Hello Ecom-App</h1>
      <p>Data fetched server-side: {data}</p> {/* Display the fetched data */}
      <p>Let's start your development process!</p>
    </div>
  );
};

export default Banner;
