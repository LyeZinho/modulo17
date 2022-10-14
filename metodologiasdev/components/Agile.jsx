import React from "react";
import Image from "next/image";

const Agile = () => {
  return (
    <div id="agile" className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col  items-center justify-center mt-6 space-x-10 pb-8 pt-8">
        <div className="flex pt-6">
          <div className="flex flex-col">
            <h2>AGILE</h2>
            <br />
            <h7>
              A metodologia AGILE é um ramo da engenharia de software que
              enfatiza a entrega contínua de software em funcionamento.
              <br />
              Ele defende o planejamento adaptativo, desenvolvimento evolutivo,
              entrega antecipada e melhoria contínua.
              <br />
              Essa abordagem ajuda as organizações a responder rapidamente às
              necessidades em constante mudança de seus clientes.
              <br />
              A abordagem Agile foi proposta pela primeira vez por um grupo de
              desenvolvedores de software em 2001.
              <br />
              <p>
                {" "}
                Eles criaram 12 princípios que acreditavam que ajudariam a criar
                software melhor mais rapidamente. Esses princípios foram
                posteriormente adaptados por outras organizações e ficaram
                conhecidos como Manifesto Ágil.
              </p>
              <br />
              O Manifesto Ágil consiste em quatro valores:
              <br />
              1) Indivíduos e interações mais que processos e ferramentas;
              <br />
              2) Software funcionando mais que documentação abrangente;
              <br />
              3) Colaboração do cliente mais que negociação de contratos;
              <br />
              4) Responder a mudanças mais que seguir um plano;
            </h7>
          </div>
          <div className="pt-[100px]">
          <Image
         
         src="/image/assets/agile.svg"
         alt="/"
         width="700"
         height="700"
       />
          </div>
        
        </div>

      </div>
    </div>
  );
};

export default Agile;
