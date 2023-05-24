import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page98 = () => {
  return(
    <div 
      id='Page98' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page98__Container'>
        <p className='Page__Text Page__Line--Height'>
          Não é feito a base de farinha de aipim, e sim aipim ralado, natural.  O bolo de <i>Fubá Cremoso</i> é uma delícia, molhadinho, cremoso com coco e o sabor suave da farinha de milho – é também conhecido como Manoel da Bahia. O nosso bolo <i>Mesclado</i> é bem tradicional, massa neutra com a de chocolate misturada. Sucesso com a criançada é uma boa opção para o café! Também conhecido como bolo mármore. O nosso bolo <i>Formigueiro</i> é bem tradicional e saboroso, massa branca e com granulado de chocolate distribuído. Sabor leve do chocolate e gostinho de infância!
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page98__Text--Border'>
            Pensei que o bolo fosse mais molhadinho, não gostei:
          </span><br/><br/>Então, temos no nosso cardápio opções mais sequinhas e outras mais molhadinhas, o ideal é informar-se com a atendente. Opções mais molhadinhas: Milho, Milho com Requeijão, Queijadinha, Aipim, Fubá Cremoso,  Maçã com Castanha, e o Luiz Felipe (Caçarola Italiana – bolo de leite e de consistência mais pesada).
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page98__Text--Border'>
            É possível produzir um sabor de bolo fora das opções do cardápio?
          </span><br/><br/>Infelizmente não. Fazemos parte de uma franquia e produzimos conforme o cardápio. Produções, sabores, e formatos padronizados. Assim, garantindo o sabor e a qualidade diária do produto sempre que você consumir. Mas, adoramos as sugestões dos nossos clientes, sempre encaminhamos a franquia para que futuramente possamos ampliar o cardápio e atender com preço justo e ainda melhor a todos.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page98__Text--Border'>
            Quero um bolo para agora (bolos difíceis de fazer e fora do horário de produção)?
          </span><br/><br/>Preparamos a produção de cada loja com antecedência, para que possamos melhor atendê-lo, por isso, tão importante fazer sua encomenda. Em nosso cardápio tem bolos com uma produção mais demorada – leva mais tempo no preparo e no forno. Dependendo do dia podemos não atender seu pedido em cima da hora, pois priorizamos as encomendas feitas com antecedência. Iniciamos a produção bem cedo para dar conta da demanda e seguimos uma linha de produção. Às vezes, o pedido é feito para retirar no mesmo dia e já encerramos a produção, por este motivo não conseguimos atender seu pedido.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={98} />
        </div>
      </div>
    </div>
  );
}