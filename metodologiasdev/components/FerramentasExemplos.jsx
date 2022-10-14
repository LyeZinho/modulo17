import React from "react";
import Image from "next/image";

import Figma from "../public/image/assets/figma.svg";
import Github from "../public/image/assets/github.svg";
import Reactlogo from "../public/image/assets/react.svg";
import Vscode from "../public/image/assets/vscode.svg";




const FerramentasCaseExemplos = () => {
  return (

    <div className="flex flex-col  items-center justify-center mt-6 space-x-10 pb-8 pt-8">
      <div className="flex pt-6">
        <div className="flex flex-col">
          <h2>Exemplos de Ferramentas CASE</h2>
          <br />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Figma} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
};

export default FerramentasCaseExemplos;