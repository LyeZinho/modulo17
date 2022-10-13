import React from "react";
import Image from "next/image";

const FerramentasCase = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col  items-center justify-center mt-6 space-x-10 pb-8 pt-8">
        <div className="flex pt-6">
          <Image
            src="/image/assets/design-and-development-process.svg"
            alt="/"
            width="900"
            height="900"
          />

          <div className="flex flex-col">
            <h2>Ferramentas Case</h2>
            <br />
            <h7>
              As ferramentas CASE são ferramentas para engenharia de software, que 
              são concebidas para ajudar no desenvolvimento, manutenção e reengenharia de 
              sistemas de software. As ferramentas CASE podem ser utilizadas para uma variedade 
              de tarefas, tais como recolha de requisitos, planejamento, engenharia inversa, concepção e modelação, 
              geração de códigos e testes. 
            </h7>
            <br />
            <h7>
              As principais vantagens das ferramentas CASE são:
            </h7>
            <ul>
              <li>
                ‣ Ajudam a automatizar o processo de desenvolvimento de software.
              </li>
              <li>
                ‣ Melhoram a qualidade dos sistemas de software.
              </li>
              <li>
                ‣ Ajudam a reduzir o custo de desenvolvimento de sistemas de software.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FerramentasCase;
