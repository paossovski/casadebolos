import React from 'react';

import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';
import { Top } from '../Top';

export const Page101 = () => {
  return(
    <div 
      id='Page101' 
      className='Page Page__Container Page__Margins Page__Mobile'
    >
      <div className='Page101__Container'>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page101__Text--Border'>
            Como funciona o cartão fidelidade no Delivery?
          </span><br/><br/>
          O cartão fidelidade é um beneficio exclusivo para compras diretamente nas lojas. No delivery não há este beneficio. Troca de cartão fidelidade preenchido apenas no balcão.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page101__Text--Border'>
            Percebi que o tempo para entrega de vez em quando varia de uma compra para outra. Por que isso acontece?
          </span><br/><br/>
          Acontece porque queremos ser mais transparentes e honestos com você. Eventualmente temos momentos em que temos uma demanda maior de uma vez só. Em outros horários, estamos mais tranquilos. A demanda é muito variável e compartilhamos isso com você para não frustrar sua expectativa, avisando no ato da compra, porque queremos garantir que você tenha uma entrega num preço justo, preço de mercado, garantindo o nosso bom preço, a saúde mental do entregador e a longevidade de nosso negócio, para sempre estar perto de vocês. Transparência acima de tudo.
        </p><br/><br/>
        <p className='Page__Text Page__Line--Height'>
          <span className='Page101__Text--Border'>
            Posso pedir qualquer bolo do cardápio?
          </span><br/><br/>
          Entregamos todos os bolos do cardápio caso queira, mas alguns saboresavisamos que são mais delicados para a entrega, ou sej, são mais frágeis no transporte, como o Vó Sônia de Morango ou Nozes, pode escorrer um pouco a cobertura e as laterais encostar na tampa. O bolo Prestígio, Toalha Felpuda, são bolos mais sensíveis que podem quebrar ou rachar. Preferimos que seja retirada em loja, assim mantendo o padrão visual. O bolo de aniversário no delivery sugerimos de ir na caixa presente, que tem um custo a parte (tamanho ideal, apropriada e mais segura) para o transporte. Ele vai também com uma cinta de proteção para evitar que danifique o bolo.  E os bolos tradicionais que solicitamos com cobertura, mandamos a cobertura separados, o cliente acrescenta na hora.  Porém, há exceções, se desejar com a cobertura aplicada, corre o risco de o bolo rachar e/ou quebrar. E não nos responsabilizamos por isso, este é o motivo pelo qual aderimos por segurança mandar a cobertura  separada.
        </p>
      </div>
      <div className='Pagination__Container'>
        <div className='Page__Up__Container'>
          <Top/>
        </div>
        <div className='Page_Numbering_Container'>
          <Numbering num={101} />
        </div>
      </div>
    </div>
  );
}