import React from "react";
import Image from "next/image";


const EngenhariaDeSoftware = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col  items-center justify-center mt-6 space-x-10 pb-8 pt-8">
        <div className="flex pt-6">
          <div className="flex flex-col">
            <h2>Importância das Metodologia de Desenvolvimento</h2>
            <br />
            <h7>
              A engenharia de software é o processo de projectar, criar, testar
              e manter software. É um campo da engenharia que combina ciência da
              computação, matemática e gestão de negócios para criar soluções de
              software eficientes e eficazes.
            </h7>
            <br />
            <h7>
              O primeiro passo na engenharia de software é entender as
              necessidades do cliente. Isso requer uma análise cuidadosa e
              documentação dos requisitos do cliente. Uma vez que os requisitos
              são entendidos, o próximo passo é projectar uma solução que atenda
              a essas necessidades. A fase de projecto inclui a criação de um
              modelo do sistema proposto e o desenvolvimento de um plano para
              implementação.
            </h7>
            <br />
            <h7>
              Após a fase de design vem a implementação, que envolve escrever o
              código e testá-lo para garantir que ele atenda a todos os
              requisitos. O teste pode ser feito manualmente ou com ferramentas
              automatizadas. Finalmente, uma vez que o software é lançado, ele
              deve ser mantido ao longo do tempo. Isso inclui garantir que ele
              continue funcionando à medida que novas plataformas de hardware e
              software forem lançadas e corrigir quaisquer bugs descobertos.
            </h7>
          </div>
          <Image
            src="/image/assets/design-and-development-process.svg"
            alt="/"
            width="900"
            height="900"
          />
        </div>
      </div>
    </div>
  );
};

export default EngenhariaDeSoftware;
