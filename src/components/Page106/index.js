import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page106 = () => {
  return(
    <div 
      id='Page106' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page106__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>O que fazer caso uma mercadoria chegue em minha casa danificada ou imprópria para consumo?</b><br/><br/>
          Trabalhamos rigorosamente para que esses casos nunca ocorram. Nossos colaboradores são treinados para manipular corretamente todos os produtos, evitando danos ou contaminação de qualquer espécie. Ainda assim, caso ocorra algum problema desta natureza, pedimos que nos informem imediatamente. Iremos rapidamente substituir o produto ou reembolsá-lo, se constatarmos o problema. Em paralelo, iremos abrir um processo de análise em nossa cozinha experimental de verificação e correção do problema. Bolo é um produto muito perecível, portanto sabemos que há riscos, e queremos ao máximo oferecer a qualidade que temos na venda direta no balcão.
          Atendentes demoram muito a responder no WhatsApp, como lidar?
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Primeiramente, perdão! Demora não é intencional, estamos atendendo de acordo com a demanda, existem momentos que são mais demorados por pedidos concentrados no mesmo horário e por isso sugerimos encomendas antecipadas. Podem ainda haver outros fatores como oscilações no sistema de mensagem, estabilidade na internet e falta de energia.
        </p><br/><br/>
        <p className='Page__Text'>
          <span className='Page106__Text--Color'>
            *** DAR TODA ATENÇÃO AO CLIENTE, SE NECESSÁRIO, LIGUE PARA ELE!
          </span>
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          Quero falar com o responsável:<br/>
          Sim, iremos lhe retornar. Passaremos a sua solcitação a nossa supervisão e a mesma irá lhe retornar em seguida e entender melhor o que aconteceu ou qual é a sua necessidade.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <b>Reclamações de bolo pelo WhatsApp –</b><br/><br/>
          Olá! Como podemos lhe ajudar? Pode falar comigo, me chamo xxxxx.
          <br/><br/>O que aconteceu com o seu bolo?<br/><br/>Pode mandar uma foto do bolo para analisarmos?
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={106} />
        </div>
      </div>
    </div>
  );
}