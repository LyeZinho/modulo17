import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col items-center justify-center mt-6 space-x-10 ">
        <h1 className="text-6xl font-semibold text-left py-5 mr-10">
          <span className=" text-yellow-300 "> Transforme</span> <br />
          Suas vendas <br />
          Online
        </h1>

        <h3 className="font-extrabold text-1xl pr-4">
          Mensalidade <span className="text-[#69ab3d]"> GRÁTIS</span> no plano
          básico
        </h3>
        <br />
        <div className="md:pr-40 ">
        <a href="register" className="relative inline-block text-lg group pt-5  ml-10">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Crie sua conta!</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
        </div>
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