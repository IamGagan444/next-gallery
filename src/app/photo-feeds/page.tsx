import React from "react";
import photography from "./wonders";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
      {photography.map(({ id, src, name }) => (
        <Link key={id} href={`/photo-feeds/${id}`}>
          <Image src={src} alt="name" className="w-[200px]" />
        </Link>
      ))}
    </div>
  );
};

export default page;
