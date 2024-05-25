import { Card } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chevrotet Tracker | Carros | Mottor ",
  description: "Generated by create next app",
  icons: "/mottor.ico ",
};

const News02cars = () => {
  return (
    <div className=" flex-col container  mx-auto mt-40 mb-24 px-4 flex items-center">
      <div className="flex justify-start items-center gap-3 bg-gray-400 rounded-lg text-black p-6 mb-1 mx-auto w-[500px] sm:w-2/4 h-2/4 ">
        <Image
          src="/clemilson.jpg"
          alt="Imagem do Clemilson"
          width={42}
          height={42}
          className="rounded-full  overflow-hidden"
        />
        <h1 className="font-bold text-orange-700">Clemilson Chaves</h1>
        <p>24/05/2024</p>
        <p>04:33 AM</p>
      </div>

      <Card className=" flex flex-col text-start items-center bg-gray-800 justify-center p-6  mt-20 mb-9 gap-8 mx-auto w-[500px] sm:w-2/4 h-2/4 ">
        <h1 className="flex text-black font-bold uppercase mt-4 mb-3">
          Nova Chevrolet Tracker: Inovação, Conforto e Segurança em um SUV
          Compacto
        </h1>

        <p>
          A Chevrolet Tracker, um dos modelos mais populares da General Motors
          no segmento de SUVs compactos, chega ao mercado com uma nova versão
          que promete surpreender os consumidores. Com um design renovado,
          tecnologias avançadas e uma performance eficiente, a nova Chevrolet
          Tracker é uma forte concorrente no crescente mercado de SUVs. Design
          Moderno e Atraente A nova Chevrolet Tracker apresenta um design
          exterior contemporâneo e elegante, com linhas arrojadas e uma presença
          robusta.

          <br />
          <br />

          A frente do veículo é marcada por uma grade imponente,
          acompanhada de faróis de LED com design afilado que proporcionam uma
          aparência sofisticada e moderna. As linhas de caráter ao longo da
          carroceria adicionam um toque de dinamismo e esportividade.As rodas de
          liga leve, disponíveis em tamanhos de até 18 polegadas, complementam o
          visual imponente do SUV. Na traseira, as lanternas LED e o spoiler
          integrado reforçam a sensação de modernidade e eficiência
          aerodinâmica.
        </p>

        <div>
          <Image
            src="/tracker1.webp"
            alt="Imagem da Tracker"
            width={360}
            height={360}
            className="rounded-lg"
          ></Image>
          <p className="text-xxs  text-black">Fonte: General Motors</p>
        </div>

        <p>
          Performance e Eficiência Sob o capô, a nova Chevrolet Tracker está
          equipada com motores turbo eficientes que oferecem um excelente
          equilíbrio entre performance e economia de combustível. As opções de
          motorização incluem um motor 1.0 turbo de três cilindros e um motor
          1.2 turbo de quatro cilindros, ambos com injeção direta de
          combustível. Esses motores são acoplados a uma transmissão automática
          de seis velocidades, proporcionando uma condução suave e responsiva. A
          eficiência de combustível é um dos pontos fortes da nova Tracker,
          tornando-a uma excelente opção para uso urbano e viagens mais longas.
          Além disso, a suspensão foi calibrada para oferecer um equilíbrio
          ideal entre conforto e estabilidade, garantindo uma experiência de
          condução agradável em diversas condições de estrada.
        </p>

        <div>
          <Image
            src="/tracker2.webp"
            alt="Imagem da tracker"
            width={360}
            height={360}
            className="rounded-lg"
          ></Image>
          <p className="text-xxs  text-black">Fonte: General Motors</p>
        </div>

        <p>
          Interior Confortável e Tecnológico O interior da nova Chevrolet
          Tracker foi projetado para maximizar o conforto e a conveniência dos
          ocupantes. O espaço interno é generoso, com assentos ergonômicos e
          materiais de alta qualidade que proporcionam uma sensação de luxo. O
          banco traseiro possui ajustes de inclinação, permitindo aos
          passageiros encontrar a posição mais confortável. O painel de
          instrumentos digital e a central multimídia com tela sensível ao toque
          de 8 polegadas são os destaques tecnológicos do interior. O sistema de
          infotainment é compatível com Apple CarPlay e Android Auto,
          facilitando a integração de smartphones e o acesso a aplicativos de
          navegação, música e comunicação.
        </p>

        <div>
          <Image
            src="/tracker4.webp"
            alt="Imagem da tracker"
            width={360}
            height={360}
            className="rounded-lg"
          ></Image>
          <p className="text-xxs  text-black">Fonte: General Motors</p>
        </div>

        <p>
          A segurança é uma prioridade na nova Chevrolet
          Tracker, que vem equipada com uma série de tecnologias de assistência
          ao motorista. Entre os principais recursos estão o alerta de colisão
          frontal com frenagem automática de emergência, assistente de
          permanência em faixa, controle de cruzeiro adaptativo, e sensores de
          estacionamento dianteiros e traseiros. Além disso, a nova Tracker
          oferece seis airbags de série, câmera de ré de alta definição e
          sistema de monitoramento de ponto cego, aumentando a segurança tanto
          para o motorista quanto para os passageiros. 
          
          <br />
          <br />

          Conectividade e Conveniência A Chevrolet Tracker também se destaca pela conectividade.
          O sistema MyLink permite o acesso a uma ampla gama de serviços
          conectados, incluindo navegação em tempo real, assistência 24 horas e
          atualizações remotas de software. O veículo possui ainda um hotspot
          Wi-Fi integrado, que permite que até sete dispositivos se conectem
          simultaneamente, mantendo todos os ocupantes conectados durante a
          viagem.
        </p>

        <div>
          <Image
            src="/tracker5.jpg"
            alt="Imagem da tracker"
            width={360}
            height={360}
            className="rounded-lg"
          ></Image>
          <p className="text-xxs  text-black">Fonte: General Motors</p>
        </div>

        <p>
          Conclusão A nova Chevrolet Tracker representa um passo significativo
          na evolução dos SUVs compactos da Chevrolet. Com um design moderno,
          uma gama de tecnologias avançadas, e uma performance eficiente, a
          Tracker se posiciona como uma escolha atraente para quem busca um
          veículo versátil e completo. A combinação de conforto, segurança e
          conectividade faz da nova Tracker uma excelente opção tanto para uso
          urbano quanto para aventuras em família. Com essa nova versão, a
          Chevrolet demonstra seu compromisso contínuo com a inovação e a
          satisfação do cliente, garantindo que a Tracker permaneça competitiva
          em um mercado cada vez mais exigente.
        </p>

        <div>
          <Image
            src="/tracker3.webp"
            alt="Imagem do jetta"
            width={360}
            height={360}
            className="rounded-lg"
          ></Image>
          <p className="text-xxs  text-black">Fonte: General Motors</p>
        </div>

        
      </Card>
    </div>
  );
};

export default News02cars;
