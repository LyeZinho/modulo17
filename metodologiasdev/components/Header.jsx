import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="min-h-full flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="items-center justify-center">
        <Image
          src="/image/assets/women-web-developer-with-laptop.svg"
          alt="/"
          width="500"
          height="500"
        />
      </div>

      <div className="flex flex-col items-left justify-left mt-6 space-x-10 pb-8 pt-8">
        <h1>Introdução a engenharia de software</h1>
        <br />
        <div className="flex flex-flow pt-6">
          <h7>
            A engenharia de software é o processo de projectar, criar, testar e
            manter software.
            <br />É um campo da engenharia que combina ciência da computação,
            matemática e gestão de negócios para criar soluções de software
            eficientes e eficazes.
          </h7>
        </div>
      </div>
    </div>
  );
};

export default Header;
