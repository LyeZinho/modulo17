import React from "react";
import Image from "next/image";


const DiferentesPerfis = () => {
  return (
    <div id="perfis" className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col  items-center justify-center mt-6 space-x-10 pb-8 pt-8">
        <div className="flex pt-6">
 
          <div className="flex flex-col">
            <h2>Diferentes Perfis</h2>
            <br />
            <h7>
              Existem muitos tipos diferentes de perfis de equipas de
              desenvolvimento de software que podem ser encontrados nas empresas
              actuais. Cada perfil tem o seu próprio conjunto único de
              competências e responsabilidades. Aqui está uma breve visão geral
              de alguns dos perfis mais comuns:
            </h7>
            <br />
            <h7>
              O gestor do projecto é responsável pelo planeamento, execução, e
              monitorização do processo de desenvolvimento de software.
              Trabalham em estreita colaboração com a equipa de desenvolvimento
              para assegurar que os prazos dos projectos são cumpridos e que os
              padrões de qualidade são cumpridos.
            </h7>
            <br />
            <h7>
              O chefe de desenvolvimento é responsável por supervisionar o
              processo de desenvolvimento e assegurar que todo o código cumpre
              os padrões exigidos. Trabalham também em estreita colaboração com
              outros programadores para fornecer mentoria e orientação.
            </h7>
            <br />
            <h7>
              O programador sénior é responsável por desenvolver um código de
              alta qualidade que satisfaça todos os requisitos. Fornecem também
              mentoria e orientação aos programadores júnior.
            </h7>
            <br />
            <h7>
              O programador júnior é responsável pela redacção de um código que
              satisfaça todos os requisitos. Fornecem também apoio aos
              programadores seniores e ajuda na resolução de problemas.
            </h7>
            <br />
            <h7>
              O engenheiro de garantia de qualidade é responsável por assegurar
              que todo o código cumpre as normas exigidas. Eles também criam e
              executam planos de teste para encontrar bugs e erros no código.
            </h7>
            <br />
            <h7>
              O engenheiro DevOps é responsável pela automatização e gestão do
              processo de desenvolvimento de software. Trabalham em estreita
              colaboração com a equipa de desenvolvimento para assegurar que
              todo o código é devidamente implementado e que todos os sistemas
              estão a funcionar sem problemas.
            </h7>
            
          </div>
          <Image
              src="/image/assets/website-designing.png"
              alt="/"
              width="1100"
              height="9 00"
            />
        </div>

      </div>
    </div>
  );
};

export default DiferentesPerfis;
