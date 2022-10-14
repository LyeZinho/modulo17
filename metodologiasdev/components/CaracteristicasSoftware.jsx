import React from "react";
import Image from "next/image";

const CaracteristicasSoftware = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col  items-center justify-center mt-6 space-x-10 pb-8 pt-8">
        <div className="flex pt-6">
          <Image src="" alt="/" width="900" height="900" />
          <div className="flex flex-col">
            <h2>Características do Software</h2>
            <br />
            <h7>
              A maioria dos produtos de software tem alguns recursos-chave que
              são essenciais para sua função. Por exemplo, um programa de
              processamento de texto precisa ser capaz de criar e editar
              documentos de texto, enquanto um programa de planilha precisa ser
              capaz de criar e editar dados numéricos em células. Alguns
              produtos de software também possuem recursos especializados que os
              tornam mais adequados para determinadas tarefas do que outros. Por
              exemplo, um programa projetado para criar apresentações pode ter
              modelos e ferramentas integrados para adicionar conteúdo
              multimídia.
            </h7>
            <br />
            <ul>
              <li>
                - Facilidade de uso: O software deve ser fácil de usar, com uma
                interface simples e fácil de navegar. Os botões e ícones devem
                ser intuitivos e autoexplicativos.
              </li>
              <br />
              <li>
                - Funcionalidade: O software deve ser capaz de executar todas as
                tarefas para as quais foi projetado, sem falhas ou bugs. Deve
                ser confiável e estável.
              </li>
              <br />
              <li>
                - Desempenho: O software deve ser executado de forma rápida e
                suave, sem atrasos ou travamentos.
              </li>
              <br />
              <li>
                - Compatibilidade: O software deve ser compatível com diferentes
                sistemas operacionais, navegadores e dispositivos.
              </li>
              <br />
              <li>
                - Segurança: O software deve ser seguro, com recursos de
                segurança robustos para proteger os dados dos usuários.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaracteristicasSoftware;
