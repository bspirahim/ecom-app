"use client";

import React, { useEffect } from "react";

interface BannerProps {
  data: string;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  useEffect(() => {
    console.log("client", data);
  }, [data]);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Hello Ecom-App</h1>
      <p>Data fetched server-side: {data}</p>
      <p>Let&apos;s start your development process!</p> {/* Use &apos; for single quote */}
    </div>
  );
};

export default Banner;
