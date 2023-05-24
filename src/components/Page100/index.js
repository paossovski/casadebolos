import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page100 = () => {
  return(
    <div 
      id='Page100' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page100__Container'>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page100__Text--Border'>
            É cobrado taxa de entrega?
          </span><br/>
          Sim, varia conforme região de entrega. Qual a sua? Assim te passamos o valor certinho ou se preferir você pode pedir diretamente pela plataforma do Ifood.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page100__Text--Border'>
            Moro próximo a loja, mesmo assim cobram taxa de entrega?
          </span><br/>
          Sim, é cobrado taxa de entrega devido ao deslocamento do motoboy – é cobrado por bairro e é o valor tabelado por nossos prestadores de serviços. Se preferir, pode retirar na loja, sem problemas. Deixamos reservado o bolinho de sua preferência para o horário que preferir.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page100__Text--Border'>
            Percebi que tem concorrentes que entregam grátis
          </span><br/>
          Sugerimos uma comparação de qualidade, tamanho e peso do produto, as vezes quem não cobra a taxa de entrega, é porque está agregado ao valor do bolo e esta pratica certamente não terá longevidade ou seja jogamos transparente com fornecedores e clientes para que tenham conhecimento e entendimento do porque o valor é cobrado.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page100__Text--Border'>
            Achei muito caro a entrega. Quando peço via ifood é mais em conta.
          </span><br/>
          Os aplicativos lhe oferecem os locais mais próximos da sua casa, por isso a percepção, mas garantimos que nossos preços de entrega são exaustivamente negociados com os entregadores, mas não os exploramos, praticamos aquilo que é justo, igualmente a qualidade de nossos produtos e preços e pedimos para você comparar, no final o nosso é sempre mais em conta e certamente muito mais saboroso, natural e fresquinho.
        </p><br/><br/>
        <p className='TePage__Textxto Page__Line--Height'>
          <span className='Page100__Text--Border'>
            Como funciona a entrega?
          </span><br/>
          Entregamos de segunda a quinta das 9h as 18h, as sexta-feiras das 9h as 18h30 e aos sábados das 9h às 16h30 – Entregamos dentro destes períodos, sem precisar de horário, mas tentamos ao máximo entregar o mais próximo possível do horário que o cliente deseja.  A demanda é muito variável e compartilhamos isso com você para não frustrar sua expectativa, avisando no ato da compra o prazo estipulado, porque queremos garantir que você tenha uma entrega num preço justo, preço de mercado, garantindo o nosso bom preço, a saúde mental do  entregador e a longevidade de nosso negócio, para sempre estar perto de vocês. Transparência acima de tudo.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={100} />
        </div>
      </div>
    </div>
  );
}