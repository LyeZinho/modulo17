import React from "react";
import Image from "next/image";

const CiclodevidaDev = () => {
  return (
    <div id="ciclodevida" className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col  items-center justify-center mt-6 space-x-10 pb-8 pt-8">
        <div className="flex pt-6">
         
          <div className="flex flex-col">
            <h2>Ciclo de vida de desenvolvimento de software</h2>
            <br />
            <h7>
              O ciclo de desenvolvimento de software é o processo que ocorre
              entre o início de um projecto e a entrega do produto final. Inclui
              todas as actividades, desde o planeamento e recolha de requisitos
              até aos testes e implementação.
            </h7>
            <br />
            <h7>
              Existem muitos modelos e estruturas diferentes para gerir o ciclo
              de desenvolvimento de software, mas todos eles partilham algumas
              fases comuns:
            </h7>
            <br />
            <ul>
              <li>
                1. Planeamento e recolha de requisitos: É aqui que a equipa do
                projecto define o âmbito, objectivos e metas para o projecto.
                Também identificam quaisquer riscos ou problemas potenciais que
                possam ter impacto no seu sucesso.
              </li>
              <br />
              <li>
                2. Concepção: A fase seguinte é conceber a solução. Isto envolverá
                a criação de especificações detalhadas de como o software deve
                funcionar. A equipa terá também de decidir sobre quais as
                tecnologias a utilizar e como serão integradas em conjunto.
              </li>
              <br />
              <li>
                3. Implementação: Uma vez concluída a concepção, é altura de
                começar a construir o software real. Esta fase pode envolver a
                escrita de código, a criação de bases de dados e a configuração
                de servidores.
              </li>
              <br />
              <li>
                4. Teste: Uma vez construído, o software precisa de ser testado
                minuciosamente antes de poder ser lançado aos utilizadores. Esta
                fase de testes identificará quaisquer erros ou problemas para
                que possam ser corrigidos antes de entrar em funcionamento.
              </li>
              <br />
              <li>
                5. Implementação: Quando tudo estiver pronto, o software pode ser
                implantado em servidores de produção e disponibilizado aos
                utilizadores . Dependendo da dimensão e complexidade do
                projecto, este processo pode levar de algumas horas a várias
                semanas.
              </li>
              <br />
              <li>
                7. Manutenção e apoio: Mesmo após a conclusão de um projecto, pode
                ainda haver algum trabalho em curso necessário em termos de
                manutenção e apoio. Isto pode incluir a correcção de bugs, a
                adição de novas funcionalidades ou a prestação de apoio ao
                utilizador.
              </li>
            </ul>
          </div>
          <div className="pt-[200px]">
          <Image
              src="/image/assets/SDLC-1.png"
              alt="/"
              width="800"
              height="800"
            />
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default CiclodevidaDev;
