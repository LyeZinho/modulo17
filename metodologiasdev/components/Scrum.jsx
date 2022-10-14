import React from "react";
import Image from "next/image";

const Scrum = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col  items-center justify-center mt-6 space-x-10 pb-8 pt-8">
        <div className="flex pt-6">
          <div className="flex flex-col">
            <h2>SCRUM</h2>
            <br />
          </div>

          <Image
            src=""
            alt="/"
            width="900"
            height="900"
          />
        </div>
      </div>
    </div>
  );
};

export default Scrum;
