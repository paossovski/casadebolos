import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina07 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Texto Line-Height'>
       Por fim, a minha paixão pela comunicação recebeu a sua porção de gratidão ainda maior, quando um dia, lendo sobre lançamentos de programas de TV, novela, li, ainda que um pequeno trecho, que teríamos uma novela das 21h que tinha como principal produto o bolo. Como assim? Parecia uma fofoca, algo distante. Na hora, o que veio a minha mente foi: É um presente de Deus na minha vida, é tudo que eu mais queria, eu sei a força de uma novela, o quanto ela impulsiona um negócio, hábitos e gera discussão, polêmica e reforça cuidados e atenção. Bingo! Não perdi tempo, plantei essas informações na cabeça das equipes. E assim que a novela estreou, todas as atendentes eram as “ Marias da Paz de Floripa”. Cada dia mais as pessoas entravam nas lojas e perguntava sobre a Maria da Paz, sobre o bolo de limão, sobre o Bolo Mágico e ali nos tornamos referência de bolos, um crescimento de vendas a cada dia, mas principalmente um recall de reconhecimento de marca imenso. Vibrávamos com as vitórias do elenco, com os números de audiência e com os desfechos de cada núcleo. Torcemos muito no Best Cake, e por fim entendemos a mensagem principal: “O que é verdadeiro permanece”. Foi sim, um presente em nossas vidas. Somos gratos, surfamos nesta onda, e sabemos o quanto isso ajuda um negócio, que já tem um produto de qualidade, que tem seu preço justo e acessível, que entrega o que promete, e foi impulsionado a se desenvolver e se consolidar a partir da trajetória de vida da Maria da Paz.
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={7} />
      </div>
    </div>
  );
}