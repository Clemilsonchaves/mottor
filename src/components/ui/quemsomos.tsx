import { Card } from "./card"
const QuemSomo = () => {
  return (
    <Card className=" flex flex-col text-start items-center bg-gray-800 justify-center p-6  mt-40 mb-9  mx-auto w-[500px] sm:w-2/4 h-2/4 ">
     
     <h1 className="flex text-gray-400 uppercase mt-4 mb-3">Introdução</h1> 
     <p>
      Bem-vindo à Mottor, sua fonte confiável de notícias e informações de automóveis. temos o orgulho de
      informar nossos leitores com paixão e dedicação no setor automotivo.
     </p>

     <h1 className="flex text-gray-400 uppercase mt-4 mb-3">Missão</h1>
     <p>
      Nossa missão na Mottor é ir além de simplesmente informar. Estamos comprometidos em
      mostrar notícias completas que superem as expectativas de
      nossos leitores. Queremos ser reconhecidos não apenas pela qualidade de
      nossos conteúdos, mas também pelo nosso compromisso em proporcionar uma
      experiência excepcional em cada interação.
     </p>
     
     <h1 className="flex text-gray-400 uppercase mt-4 mb-3">Visão</h1>
     <p>
      Nossa visão é liderar o mercado de notícia automotiva, oferecendo
      uma gama diversificada de conteúdos inovadores. Queremos ser a
      primeira escolha de nossos leitores quando se trata de encontrar o conteúdo
      perfeito para sua irformação. Enxergamos um futuro onde
      continuaremos a crescer e aprimorar nossas notícias, mantendo sempre a
      satisfação dos leitores como nossa principal prioridade. 
     </p>
     
     <h1 className="flex text-gray-400 uppercase mt-4 mb-3">Valores</h1>
     <p>
      Nossos valores fundamentais guiam cada decisão e ação que tomamos na MOTTOR. Valorizamos a
      integridade, transparência e respeito em todas as nossas interações.
      Estamos comprometidos com a excelência, buscando constantemente elevar os
      padrões da mídia. Além disso, valorizamos o relacionamento
      com nossos leitores e a comunidade, buscando construir parcerias
      duradouras baseadas na confiança e na honestidade.
     </p>
      
      <h1 className="flex text-gray-400 uppercase mt-4 mb-3">Conclusão</h1>
      <p>
      Convidamos você a explorar nosso site e
      descobrir como a MOTTOR pode atender às suas necessidades
      automotivas. Conte conosco para  uma
      experiência completa que supera suas expectativas. Estamos aqui para
      ajudar você a encontrar conteúdos de boa qualidade a embarcar em uma
      jornada automotiva emocionante e satisfatória.
      </p>
      
    </Card>
  );
}
 
export default QuemSomo;