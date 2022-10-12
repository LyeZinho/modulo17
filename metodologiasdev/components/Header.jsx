import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col items-center justify-center mt-6 space-x-10 ">


      </div>
      <div className="hidden md:block">
        <Image
          src="/image/assets/developer.gif"
          alt="Dev gif"
          width={700}
          height={400}
        />
      </div>
    </div>
  );
};

export default Header;