import React from "react";
import Image from "next/image";

const Scrum = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col  items-center justify-center mt-6 space-x-10 pb-8 pt-8">
        <div className="flex pt-6">
          <div className="flex flex-col">
            <h2>SCRUM</h2>
            <br />
            <h7>
              Scrum é uma metodologia ágil de desenvolvimento de software que se
              concentra na entrega de software de trabalho através de ciclos
              curtos e iterativos chamados sprints. É uma escolha popular para
              organizações que querem melhorar o seu processo de desenvolvimento
              de software e acelerar a entrega de novas funcionalidades aos
              clientes.
            </h7>
            <br />
            <h7>
              A metodologia Scrum foi descrita pela primeira vez no início dos
              anos 90 por Jeff Sutherland e Ken Schwaber, que a desenvolveram
              como uma forma de abordar algumas das questões que viram com as
              abordagens tradicionais de cascata ao desenvolvimento de software.
              O Scrum é agora um dos métodos ágeis mais utilizados para o
              desenvolvimento de software.
            </h7>
            <br />
            <h7>
              No seu núcleo, Scrum baseia-se em certos papéis alguns deles são:
              proprietário do produto, mestre do Scrum, e membro da equipa. O
              proprietário do produto é responsável por definir o que precisa de
              ser construído e assegurar que este satisfaz as necessidades do
              cliente. O scrum master é responsável por facilitar o processo e
              remover quaisquer impedimentos que possam impedir a equipa de ser
              produtiva. Os membros da equipa são responsáveis pela construção
              efectiva do software.
            </h7>
          </div>

          <Image src="" alt="/" width="900" height="900" />
        </div>
      </div>
    </div>
  );
};

export default Scrum;
