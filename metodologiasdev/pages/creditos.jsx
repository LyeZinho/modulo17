import React from "react";

const creditos = () => {
  return (
    <div id="creditos" className="w-full md:h-screen p-2 flex items-center py-24">
      <div className="max-w-[1240px] m-auto">
        <div className="col-span-2 pb-[90px]">
          <h1 className="py-4 text-white align text-center uppercase text-xl tracking-widest ">
            Créditos | Credits
          </h1>

          <p className="py-5 text-white">
            Este site foi criado para propositos escolares.
            <br />
            Correspondentes ao módulo 17 da disciplina de Programação de
            sistemas informáticos.
            <br />
            Feito por Thiago Santos nº20 e Pedro Kaleb nº17. Professor Marco
            Neves.
            <br />
            TGPSI Agrupamento de escolas da Batalha.
          </p>
          <br />
          <p className="py-5 text-white">
            This site was created for school purposes. Corresponding to module
            17 of the Computer Systems Programming subject
            <br />
            Made by Thiago Santos nº20 and Pedro Kaleb nº17. Teacher Marco
            Neves.
            <br />
            TGPSI Agrupamento de escolas da Batalha.
          </p>

          <br />
        </div>
      </div>
    </div>
  );
};

export default creditos;
