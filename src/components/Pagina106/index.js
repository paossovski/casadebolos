import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina106 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-106'>
        <p className='Texto T-106'>
          <b>O que fazer caso uma mercadoria chegue em minha casa danificada ou imprópria para consumo?</b><br/><br/>
          Trabalhamos rigorosamente para que esses casos nunca ocorram. Nossos colaboradores são treinados para manipular corretamente todos os produtos, evitando danos ou contaminação de qualquer espécie. Ainda assim, caso ocorra algum problema desta natureza, pedimos que nos informem imediatamente. Iremos rapidamente substituir o produto ou reembolsá-lo, se constatarmos o problema. Em paralelo, iremos abrir um processo de análise em nossa cozinha experimental de verificação e correção do problema. Bolo é um produto muito perecível, portanto sabemos que há riscos, e queremos ao máximo oferecer a qualidade que temos na venda direta no balcão.
          Atendentes demoram muito a responder no WhatsApp, como lidar?
        </p><br/><br/>
        <p className='Texto T-106'>
          Primeiramente, perdão! Demora não é intencional, estamos atendendo de acordo com a demanda, existem momentos que são mais demorados por pedidos concentrados no mesmo horário e por isso sugerimos encomendas antecipadas. Podem ainda haver outros fatores como oscilações no sistema de mensagem, estabilidade na internet e falta de energia.
        </p><br/><br/>
        <p className='Texto'>
          <span className='P-106'>*** DAR TODA ATENÇÃO AO CLIENTE, SE NECESSÁRIO, LIGUE PARA ELE!</span>
        </p><br/><br/>
        <p className='Texto T-106'>
          Quero falar com o responsável:<br/>
          Sim, iremos lhe retornar. Passaremos a sua solcitação a nossa supervisão e a mesma irá lhe retornar em seguida e entender melhor o que aconteceu ou qual é a sua necessidade.
        </p><br/><br/>
        <p className='Texto T-106'>
          <b>Reclamações de bolo pelo WhatsApp –</b><br/><br/>
          Olá! Como podemos lhe ajudar? Pode falar comigo, me chamo xxxxx.
          <br/><br/>O que aconteceu com o seu bolo?<br/><br/>Pode mandar uma foto do bolo para analisarmos?
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={106} />
      </div>
    </div>
  );
}