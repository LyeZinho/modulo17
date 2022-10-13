import React from "react";
import Image from "next/image";

const ImportanciaMetodologia = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col  items-center justify-center mt-6 space-x-10 pb-8 pt-8">
        <div className="flex pt-6">
          
          <div className="flex flex-col">
            <h2>Importância das Metodologia de Desenvolvimento</h2>
         <br />   
            <h7>
              Metodologias e ferramentas de análise são importantes no
              desenvolvimento de produtos de software porque fornecem uma
              abordagem estruturada para o desenvolvimento de software e ajudam
              a garantir que todas as etapas necessárias sejam tomadas durante o
              processo de desenvolvimento.
              <br />
              Além disso, metodologias e ferramentas de análise podem ajudar a
              identificar possíveis problemas no início do processo de
              desenvolvimento, o que pode economizar tempo e dinheiro
              posteriormente. Existem muitas metodologias de desenvolvimento de
              software diferentes disponíveis, e cada uma tem seus próprios
              pontos fortes e fracos.
              <br />É importante seleccionar a metodologia que melhor se adapta
              às necessidades do projecto em questão. Além disso, diferentes
              ferramentas de análise podem ser usadas para ajudar a avaliar a
              viabilidade de um projecto, identificar riscos potenciais e
              acompanhar o progresso durante o desenvolvimento.
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

export default ImportanciaMetodologia;
